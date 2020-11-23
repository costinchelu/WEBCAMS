const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const cors = require("cors");

// folosesc biblioteca creată în scopul comunicării cu Webcams Travel API
const webcams = require("./webcams_lib");

const sequelize = new Sequelize("webcams", "root", "Costin", {
  dialect: "mysql",
  define: {
    timestamps: false
  }
});

// aplicația conține 2 tabele SQL cu legături între ele (Regiunea va fi compusă dintr-un număr de orașe)
const Region = sequelize.define(
  "region",
  {
    name: Sequelize.STRING,
    regioncode: Sequelize.STRING,
    details: Sequelize.TEXT,
    link: Sequelize.STRING
  },
  { underscored: true }
);

const City = sequelize.define("city", {
  name: Sequelize.STRING,
  webcam: Sequelize.STRING,
  latitude: Sequelize.FLOAT,
  longitude: Sequelize.FLOAT
});

Region.hasMany(City);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// endpoint-uri GET, POST, PUT, DELETE pentru lucrul cu regiuni
app.get("/create", async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    res.status(201).json({ message: "Tables created" });
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/regions", async (req, res) => {
  try {
    let regions = await Region.findAll();
    res.status(200).json(regions);
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/regions", async (req, res) => {
  try {
    if (req.query.bulk && req.query.bulk == "on") {
      await Region.bulkCreate(req.body);
      res.status(201).json({ message: "Entry created" });
    } else {
      await Region.create(req.body);
      res.status(201).json({ message: "Entry created" });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/regions/:rid", async (req, res) => {
  try {
    let region = await Region.findByPk(req.params.rid);
    if (region) {
      res.status(200).json(region);
    } else {
      res.status(404).json({ message: "Region ID not found" });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/regions/:rid", async (req, res) => {
  try {
    let region = await Region.findByPk(req.params.rid);
    if (region) {
      await region.update(req.body);
      res.status(202).json({ message: "Entry updated" });
    } else {
      res.status(404).json({ message: "Region ID not found" });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/regions/:rid", async (req, res) => {
  try {
    let region = await Region.findByPk(req.params.rid);
    if (region) {
      await region.destroy();
      res.status(202).json({ message: "Entry deleted" });
    } else {
      res.status(404).json({ message: "Region ID not found" });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});
//
//----
// endpoint-uri GET, POST, PUT, DELETE pentru lucrul cu orașe
app.get("/regions/:rid/cities", async (req, res) => {
  try {
    let region = await Region.findByPk(req.params.rid);
    if (region) {
      let cities = await region.getCities();
      res.status(200).json(cities);
    } else {
      res.status(404).json({ message: "Error reading cities" });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/regions/:rid/cities/:cid", async (req, res) => {
  try {
    let region = await Region.findByPk(req.params.rid);
    if (region) {
      let cities = await region.getCities({ where: { id: req.params.cid } });
      res.status(200).json(cities.shift());
    } else {
      res.status(404).json({ message: "ID not found" });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/regions/:rid/cities", async (req, res) => {
  try {
    let region = await Region.findByPk(req.params.rid);
    if (region) {
      let city = req.body;
      city.region_id = region.id;
      await City.create(city);
      res.status(201).json({ message: "Entry created" });
    } else {
      res.status(404).json({ message: "ID not found" });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/regions/:rid/cities/:cid", async (req, res) => {
  try {
    let region = await Region.findByPk(req.params.rid);
    if (region) {
      let cities = await region.getCities({ where: { id: req.params.cid } });
      let city = cities.shift();
      if (city) {
        await city.update(req.body);
        res.status(202).json({ message: "Entry updated" });
      } else {
        res.status(404).json({ message: "ID not found" });
      }
    } else {
      res.status(404).json({ message: "ID not found" });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/regions/:rid/cities/:cid", async (req, res) => {
  try {
    let region = await Region.findByPk(req.params.rid);
    if (region) {
      let cities = await region.getCities({ where: { id: req.params.cid } });
      let city = cities.shift();
      if (city) {
        await city.destroy(req.body);
        res.status(202).json({ message: "Entry deleted" });
      } else {
        res.status(404).json({ message: "ID not found" });
      }
    } else {
      res.status(404).json({ message: "ID not found" });
    }
  } catch (e) {
    console.warn(e);
    res.status(500).json({ message: "Server error" });
  }
});

// endpoint api extern
// Endpoint-ul face request la API-ul Webcams travel. Pentru request se folosește un id al camerei web, care este introdus de user în prealabil în baza de date a aplicației
app.get("/webcams/:wId", async (req, res) => {
  try {
    let content = await webcams.getWebcams(req.params.wId);
    res.status(200).send(content);
  } catch (e) {
    res.status(500).send("Did not work");
  }
});

app.listen(8080);
