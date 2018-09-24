import React from "react";
import PropTypes from "prop-types";
import Config from "./config";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {
            action : "/",
            method : "get"
        }
    }

    static get propTypes() {
        return {
            action : PropTypes.string,
            method : PropTypes.string
        }
    }

    render() {
        let { action, method, encType } = this.props
        const methods = ["get", "post", "put", "delete"];
        method = methods.includes(method) ? method.toLowerCase() : "get"; 

        let encType = "";
        if(Config.encType.type === "file") {
            encType = "multipart/form-data";    
        }
    
        return <form action={ action } method={ method } encType={encType}>{ this.props.children }</form>
    }
}