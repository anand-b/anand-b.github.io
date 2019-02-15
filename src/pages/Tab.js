import React from "react";

const Tab = (props)=> {
    return (
        <a className={"tab " + (props.active === props.id ? "active" : "")} onClick={() => props.onClick(props.id)}>{props.name}</a>
    )
}

export default Tab;