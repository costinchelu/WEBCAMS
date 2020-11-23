import React, {Component} from "react";
import "../style/Button.css";
import "../style/Table.css";
import "../style/Textarea.css";

// componentă folosită pentru adăugare de intrări noi (regiuni)
class RegionAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            regioncode: "",
            details: "",
            link: ""
        };

        this.handleChange = (evt) => {
            this.setState({
                [evt.target.name]: evt.target.value,
            });
        };

        this.add = () => {
            this.props.onAdd({
                name: this.state.name,
                regioncode: this.state.regioncode,
                details: this.state.details,
                link: this.state.link
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
                                    className="f6 b db mb2">Numele regiunii
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
                                    className="f6 black-60">Introduceți numele regiunii de adăugat.
                                </small>
                            </div>
                        </form>
                    </td>
                    <td>
                        <form className="pa4 black-80">
                            <div>
                                <label
                                    htmlFor="comment"
                                    className="f6 b db mb2">Codul regiunii (ISO 3166)
                                </label>
                                <textarea
                                    id="comment"
                                    className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                    aria-describedby="comment-desc"
                                    onChange={this.handleChange}
                                    name={"regioncode"}>
                                </textarea>
                                <small
                                    id="comment-desc"
                                    className="f6 black-60">Introduceți codul regiunii de adăugat.
                                </small>
                            </div>
                        </form>
                    </td>
                    <td>
                        <form className="pa4 black-80">
                            <div>
                                <label
                                    htmlFor="comment"
                                    className="f6 b db mb2">Detalii
                                </label>
                                <textarea
                                    id="comment"
                                    className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                    aria-describedby="comment-desc"
                                    onChange={this.handleChange}
                                    name={"details"}>
                                </textarea>
                                <small
                                    id="comment-desc"
                                    className="f6 black-60">Introduceți detalii despre regiune.
                                </small>
                            </div>
                        </form>
                    </td>
                    <td>
                        <form className="pa4 black-80">
                            <div>
                                <label
                                    htmlFor="comment"
                                    className="f6 b db mb2">Link wiki
                                </label>
                                <textarea
                                    id="comment"
                                    className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                    aria-describedby="comment-desc"
                                    onChange={this.handleChange}
                                    name={"link"}>
                                </textarea>
                                <small
                                    id="comment-desc"
                                    className="f6 black-60">Introduceți un link cu informații despre regiune.
                                </small>
                            </div>
                        </form>
                    </td>
                    <td>
                        <br/><br/>
                       <a
                           className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-gray adderButton"
                           onClick={this.add}
                           href="#0">Adaugă regiunea
                       </a>
                    </td>
                </table>
            </div>
        )
    }
}

export default RegionAdder