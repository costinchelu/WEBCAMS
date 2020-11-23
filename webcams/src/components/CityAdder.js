import React, {Component} from 'react';
import "../style/Button.css";
import "../style/Table.css";
import "../style/Textarea.css";

// componentă folosită pentru adăugare de intrări noi (localități)
class CityAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            webcam: "",
            latitude: "",
            longitude: ""
        };

        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name]: evt.target.value,
            });
        };

        this.add = () => {
            this.props.onAdd({
                name: this.state.name,
                webcam: this.state.webcam,
                latitude: this.state.latitude,
                longitude: this.state.longitude
            })}

    }

    render() {
        return (
            <div>
                <table className={"center stripe-dark overflow-auto"}>
                    <td>
                        <form className="pa4 black-80">
                            <div>
                                <label
                                    htmlFor="comment"
                                    className="f6 b db mb2">Numele localității
                                </label>
                                <textarea
                                    id="comment"
                                    className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                    aria-describedby="comment-desc"
                                    onChange={this.handleChange}
                                    name={"name"}>
                                </textarea>
                                <small
                                    id="comment-desc"
                                    className="f6 black-60">Introduceți numele localității de adăugat.
                                </small>
                            </div>
                        </form>
                    </td>
                    <td>
                        <form className="pa4 black-80">
                            <div>
                                <label
                                    htmlFor="comment"
                                    className="f6 b db mb2">Webcam
                                </label>
                                <textarea
                                    id="comment"
                                    className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                    aria-describedby="comment-desc"
                                    onChange={this.handleChange}
                                    name={"webcam"}>
                                </textarea>
                                <small
                                    id="comment-desc"
                                    className="f6 black-60">Introduceți indicativul webcam-ului
                                </small>
                            </div>
                        </form>
                    </td>
                    <td>
                        <form className="pa4 black-80">
                            <div>
                                <label
                                    htmlFor="comment"
                                    className="f6 b db mb2">Latitudine
                                </label>
                                <textarea
                                    id="comment"
                                    className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                    aria-describedby="comment-desc"
                                    onChange={this.handleChange}
                                    name={"latitude"}>
                                </textarea>
                                <small
                                    id="comment-desc"
                                    className="f6 black-60">Introduceți latitudinea locației (în coordonate decimale)
                                </small>
                            </div>
                        </form>
                    </td>
                    <td>
                        <form className="pa4 black-80">
                            <div>
                                <label
                                    htmlFor="comment"
                                    className="f6 b db mb2">Longitudine
                                </label>
                                <textarea
                                    id="comment"
                                    className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                    aria-describedby="comment-desc"
                                    onChange={this.handleChange}
                                    name={"longitude"}>
                                </textarea>
                                <small
                                    id="comment-desc"
                                    className="f6 black-60">Introduceți longitudinea locației (în coordonate decimale)
                                </small>
                            </div>
                        </form>
                    </td>
                    <td><br/><br/>
                        <div className="ph3">
                            <a
                                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray adderButton"
                                onClick={this.add}
                                href="#0">Adaugă localitatea
                            </a>
                        </div>
                    </td>
                </table>
            </div>
        )
    }
}


export default CityAdder;