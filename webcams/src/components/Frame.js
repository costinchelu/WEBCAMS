import React, {Component} from 'react';
import "../style/Frame.css";

// componenta pentru afișarea stream-ului video oferit de Webcams Travel API
// streamul este schimbat atunci când este selectată altă localitate din listă
// prin selectarea butonului "Afișează camera".
// ! ID-ul camerei de la atributul "Webcam" trebuie să fie valid
// un subtitlu va indica numele localității deasupra frame-ului. Atât numele cât
// și link-ul este primit prin props, și respectivele stări sunt modificate de componenta City
class Frame extends Component {

    render() {
        return(
            <div align={"center"}>
                <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
                    Stream video (day stream) din <b>{this.props.selectedCity}</b>
                </h2>
                <iframe src={this.props.link} height="500" width="900" title={"Video"}>
                </iframe>
            </div>
        )
    }
}

export default Frame;