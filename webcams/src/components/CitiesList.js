import React, {Component} from 'react';
import CityStore from "../stores/CityStore";
import City from "./City";
import CityAdder from "./CityAdder";
import Frame from "./Frame";
import "../style/Button.css";
import "../style/Table.css";
import "../style/Textarea.css";

// afișează lista de localități corespunzătoare regiunii și componente pentru
// adăugara de noi localități precum și un frame pentru afișare stream-urilor video
class CitiesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [],
            link: "",
            selectedCity: ""
        };

        this.store = new CityStore();

        this.add = (city) => {
            this.store.addOne(this.props.item.id, city)
        };

        this.edit = (id, city) => {
            this.store.saveOne(this.props.item.id, id, city)
        };

        this.delete = (id) => {
            this.store.deleteOne(this.props.item.id, id)
        };

        this.getLink = (id, selectedCity) => {
            this.store.getWebcam(id);
            this.store.emitter.addListener('GET_WEBCAM_OK', () => {
                this.setState({
                    link: this.store.link,
                    selectedCity: selectedCity
                })
            })
        };
    }

    componentDidMount() {
        this.store.getAll(this.props.item.id);
        this.store.emitter.addListener("GET_CITIES_BY_REGION_OK", () => {
            this.setState({
                cities: this.store.cities
            })
        });
    }

    render() {
        return (
            <div>
                <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                    Locații în regiunea <b>{this.props.item.name}</b>
                </h2>
                <div>
                    {this.state.cities.map((e, i) =>
                    <City
                        key={i}
                        item={e}
                        onDelete={this.delete}
                        onEdit={this.edit}
                        onLinkRequest={this.getLink}
                        />
                    )}
                </div>
                <div><br/>
                    <CityAdder
                        onAdd={this.add}/>
                </div><br/>
                <div>
                    <Frame
                        link={this.state.link}
                        selectedCity={this.state.selectedCity}/>
                </div><br/>
                <div className="ph3">
                    <a
                        className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray"
                        onClick={() => this.props.onCancel()}
                        href="#0">Inapoi la tabelul cu reguni</a>
                </div>
            </div>
        )
    }
}

export default CitiesList;