import React, {Component} from 'react';
import "../style/Table.css";
import "../style/Button.css";

// afișarea listei de regiuni precum și componente folosite la editare sau ștergere a intrărilor
class Region extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            name: this.props.item.name,
            regioncode: this.props.item.regioncode,
            details: this.props.item.details,
            link: this.props.item.link
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
                    regioncode: this.state.regioncode,
                    details: this.state.details,
                    link: this.state.link
                });
            this.setState({editMode: false})
        };

        this.delete = () => {
            this.setState({editMode: false},
                this.props.onDelete(this.props.item.id))
        }
    }

    render() {
        if(this.state.editMode) {
            return <div>
                <div>
                    <h2 className="red-crimson center f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                        Mod editare pentru regiunea <b>{this.props.item.name}</b>
                    </h2>
                </div>
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
                                        className="f6 b db mb2">Codul regiunii (ISO 3166)
                                    </label>
                                    <textarea
                                        id="comment"
                                        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                                        aria-describedby="comment-desc"
                                        value={this.state.regioncode}
                                        onChange={this.handleChange}
                                        name={"regioncode"}>
                                    </textarea>
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
                                        value={this.state.details}
                                        onChange={this.handleChange}
                                        name={"details"}>
                                    </textarea>
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
                                        value={this.state.link}
                                        name={"link"}>
                            </textarea>
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
                                <th className="fw6 tl pa3 bg-white">Numele regiunii</th>
                                <th className="fw6 tl pa3 bg-white">Codul regiunii (ISO 3166)</th>
                                <th className="fw6 tl pa3 bg-white">Detalii</th>
                                <th className="fw6 tl pa3 bg-white">Link wiki</th>
                                <th className="fw6 tl pa3 bg-white tacenter">Editare detalii</th>
                                <th className="fw6 tl pa3 bg-white tacenter">Afișare locații</th>
                            </tr>
                            </thead>
                            <tbody className="lh-copy">
                            <tr className="stripe-dark">
                                <td className="pa3">{this.props.item.name}</td>
                                <td className="pa3">{this.props.item.regioncode}</td>
                                <td className="pa3">{this.props.item.details}</td>
                                <td className="pa3">
                                    <a
                                        href={this.props.item.link}
                                        /* eslint-disable-next-line react/jsx-no-target-blank */
                                        target="_blank">{this.props.item.link}
                                    </a>
                                </td>
                                <td className="pa3 row-btn">
                                    <div data-name="screenshot">
                                        <div className="ph3">
                                            <a
                                                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink"
                                                href="#0"
                                                onClick={() =>
                                                    this.setState({editMode: true})}>Editează regiunea</a>
                                        </div>
                                    </div>
                                </td>
                                <td className="pa3 row-btn">
                                    <div data-name="screenshot">
                                        <div className="ph3">
                                            <a
                                                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink"
                                                href="#0"
                                                onClick={() =>
                                                    this.props.onSelect(this.props.item.id)}>Afișează locații</a>
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


export default Region;