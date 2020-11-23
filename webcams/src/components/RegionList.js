import React, {Component} from 'react';
import RegionStore from "../stores/RegionStore";
import RegionAdder from "./RegionAdder";
import Region from "./Region";
import CitiesList from "./CitiesList";
import Header from "./Header";
import Title from "./Title";

// componenta principală a regiunilor
class RegionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regions: [],
            citiesOf: -1,
            selectedRegion: null
        };

        this.titleRegiuni = "Regiuni";
        this.subtitletitleRegiuni = "Lista de regiuni. Se pot adăuga regiuni noi, iar fiecare regiune este editabilă";
        this.titleOrase = "Orase";
        this.subtitletitleOrase = "Lista de locații ale camerelor. Se pot adăuga locații noi, iar fiecare locație este editabilă";

        this.store = new RegionStore();

        this.add = (region) => {
            this.store.addOne(region)
        };

        this.edit = (id, region) => {
            this.store.saveOne(id, region)
        };

        this.delete = (id) => {
            this.store.deleteOne(id)
        };

        this.select = (id) => {
            let selection = this.state.regions.find((e) => e.id === id);
            this.setState({
                citiesOf: id,
                selectedRegion: selection
            })
        };

        this.resetSelection = () => {
            this.setState({
                citiesOf: -1
            })
        }
    }

    componentDidMount() {
        this.store.getAll();
        this.store.emitter.addListener("GET_REGIONS_OK", () => {
            this.setState({
                regions: this.store.regions
            })
        })
    }

    render() {
        if(this.state.citiesOf === -1) {
            return(
                <div>
                    <Header/>
                    <Title
                        title={this.titleRegiuni}
                        subtitle={this.subtitletitleRegiuni}/>
                    {
                        this.state.regions.map((e, i) =>
                            <Region
                                key={i}
                                item={e}
                                onDelete={this.delete}
                                onEdit={this.edit}
                                onSelect={this.select}/>
                        )
                    }
                    <RegionAdder
                        onAdd={this.add}/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Header/>
                    <Title
                        title={this.titleOrase}
                        subtitle={this.subtitletitleOrase}/>
                    <CitiesList
                        onCancel={this.resetSelection}
                        item={this.state.selectedRegion}/>
                </div>
            )
        }

    }

}

export default RegionList
