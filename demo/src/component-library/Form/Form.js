import React from "react";
import PropTypes from "prop-types";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    static get defaultProps() {
        return {
            action : "/",
            method : "get",
            uploadFile : false,
            id : ""
        }
    }

    static get propTypes() {
        return {
            action : PropTypes.string,
            method : PropTypes.string,
            uploadFile : PropTypes.bool,
            id : PropTypes.string 
        }
    }

    render() {
        let { action, method, uploadFile, id } = this.props

        //验证提交类型合法性
        const methods = ["get", "post", "put", "delete"];
        method = methods.includes(method.toLowerCase()) ? method : "get"; 
        //验证文件上传
        uploadFile = uploadFile ? "multipart/form-data" : "";

        return <form 
            action={ action } 
            method={ method } 
            encType={ uploadFile } 
            id={ id }>{ this.props.children }</form>
    }
}