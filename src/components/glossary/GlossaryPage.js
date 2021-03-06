import React, {Component} from "react";
import "./GlossaryPage.css"
import { Search } from "../common/index";
import { Link } from "react-router-dom";

import glossarioLogo from '../../../assets/images/glossario-logo.svg';

import terms from '../../lib/data';

class GlossaryPage extends Component {
    constructor(props) {
        super(props);
    }

    handleAcronymChange = (selected) => {
        this.props.history.push(`/${selected}`);
    };

    getRandomEntry = () => {
        const entries = Object.keys(terms);
        const index = Math.floor(Math.random() * entries.length);
        return entries[index];
    }

    render() {
        const randomEntry = this.getRandomEntry();
        return (
            <div className={"glossary__container"}>
                <Link to={""} className={"glossary__logo"}>
                    <img src={glossarioLogo} />
                </Link>
                <Search className={"glossary__search"}
                        items={Object.keys(terms).sort()}
                        handleSelect={this.handleAcronymChange}/>
                <span className={"glossary__day-phrase"}>Você sabe o que é <Link className="emphasis pointer-hover light-accent lighter-hover" to={`/${randomEntry}`}>{ randomEntry }</Link>?</span>
            </div>
        );
    }
}

export default GlossaryPage;