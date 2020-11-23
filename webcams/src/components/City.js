import React, {Component} from 'react';
import "../style/Button.css";
import "../style/Table.css";
import "../style/Textarea.css"

// afișarea listei de localități precum și componente folosite la editare sau ștergere a intrărilor
class City extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            name: this.props.item.name,
            webcam: this.props.item.webcam,
            latitude: this.props.item.latitude,
            longitude: this.props.item.longitude
        };

        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        };

        this.edit = () => {
            this.props.onEdit(
                this.props.item.id,
                {
                    name: this.state.name,
                    webcam: this.state.webcam,
                    latitude: this.state.latitude,
                    longitude: this.state.longitude
                });
            this.setState({editMode: false})
        };

        this.delete = () => {
            this.setState({editMode: false},
                this.props.onDelete(this.props.item.id))
        };

        this.sendLink = () => {
            this.props.onLinkRequest(this.state.webcam, this.state.name)
        };


    }

    render() {
        if(this.state.editMode) {
            return <div>
                <div>
                    <h2 className="red-crimson center f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                        Mod editare pentru localitatea <b>{this.props.item.name}</b>
                    </h2>
                </div>
                <div>
                    <table className={"center stripe-dark overflow-auto"}>
                        <td>
                            <form className="pa4 black-80">
                                <div>
                                    <label
                                        htmlFor="comment"
                                        className="f6 b db mb2">Numele locatiei
                                    </label>
                                    <textarea
                                        id="comment"
                                        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                        aria-describedby="comment-desc"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        name={"name"}>
                                    </textarea>
                                </div>
                            </form>
                        </td>
                        <td>
                            <form className="pa4 black-80">
                                <div>
                                    <label
                                        htmlFor="comment"
                                        className="f6 b db mb2">Indicativ webcam
                                    </label>
                                    <textarea
                                        id="comment"
                                        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                        aria-describedby="comment-desc"
                                        value={this.state.webcam}
                                        onChange={this.handleChange}
                                        name={"webcam"}>
                                    </textarea>
                                </div>
                            </form>
                        </td>
                        <td>
                            <form className="pa4 black-80">
                                <div>
                                    <label
                                        htmlFor="comment"
                                        className="f6 b db mb2">Latitudine locație
                                    </label>
                                    <textarea
                                        id="comment"
                                        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                        aria-describedby="comment-desc"
                                        value={this.state.latitude}
                                        onChange={this.handleChange}
                                        name={"latitude"}>
                                    </textarea>
                                    <small
                                        id="comment-desc"
                                        className="f6 black-60">Valoarea se introduce în format zecimal!
                                    </small>
                                </div>
                            </form>
                        </td>
                        <td>
                            <form className="pa4 black-80">
                                <div>
                                    <label
                                        htmlFor="comment"
                                        className="f6 b db mb2">Longiudine locație
                                    </label>
                                    <textarea
                                        id="comment"
                                        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                        aria-describedby="comment-desc"
                                        onChange={this.handleChange}
                                        value={this.state.longitude}
                                        name={"longitude"}>
                                    </textarea>
                                    <small
                                        id="comment-desc"
                                        className="f6 black-60">Valoarea se introduce în format zecimal!
                                    </small>
                                </div>
                            </form>
                        </td>
                        <td><br/><br/>
                            <div data-name="screenshot">
                                <div className="ph3">
                                    <a
                                        className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink"
                                        href="#0"
                                        onClick={this.delete}>Șterge</a>
                                </div>
                            </div>
                        </td>
                        <td><br/><br/>
                            <div className="ph3">
                                <a
                                    className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray"
                                    href="#0"
                                    onClick={() => this.setState({editMode: false})}>Anulează</a>
                            </div>
                        </td>
                        <td><br/><br/>
                            <div data-name="screenshot">
                                <div
                                    className="ph3">
                                    <a
                                        className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
                                        href="#0"
                                        onClick={this.edit}>Salvează</a>
                                </div>
                            </div>
                        </td>
                    </table>
                </div>
            </div>
        } else {
            return <div>
                <div className="pa4">
                    <div className="overflow-auto">
                        <table className="f6 w-100 mw8 center" cellSpacing="0">
                            <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white">Numele locației</th>
                                <th className="fw6 tl pa3 bg-white">Webcam</th>
                                <th className="fw6 tl pa3 bg-white">latitudine (format decimal)</th>
                                <th className="fw6 tl pa3 bg-white">longitudine (format decimal)</th>
                                <th className="fw6 tl pa3 bg-white tacenter">Editare detalii</th>
                                <th className="fw6 tl pa3 bg-white tacenter">Afișează stream</th>
                            </tr>
                            </thead>
                            <tbody className="lh-copy">
                            <tr className="stripe-dark">
                                <td className="pa3">{this.props.item.name}</td>
                                <td className="pa3">{this.props.item.webcam}</td>
                                <td className="pa3">{this.props.item.latitude}</td>
                                <td className="pa3">{this.props.item.longitude}</td>
                                <td className="pa3">
                                    <div data-name="screenshot">
                                        <div className="ph3">
                                            <a
                                                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink"
                                                href="#0"
                                                onClick={() =>
                                                    this.setState({editMode: true})}>Editează orașul</a>
                                        </div>
                                    </div>
                                </td>
                                <td className="pa3">
                                    <div data-name="screenshot">
                                        <div className="ph3">
                                            <a
                                                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink"
                                                href="#0"
                                                onClick={this.sendLink}>Afișează camera</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        }
    }
}

export default City;