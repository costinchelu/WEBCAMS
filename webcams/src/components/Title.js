import React, {Component} from 'react';
import "../style/Title.css";

// titlul afișează mesaje personalizate pentru regiuni, respectiv localități în funcție
// de props
class Title extends Component {

    render() {
        return (
            <header className="tc ph4 title1">
                <h1 className="f3 f2-m f1-l fw2 black-90 mv3">
                    {this.props.title}
                </h1>
                <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                    {this.props.subtitle}
                </h2>
            </header>
        )
    }
}


export default Title