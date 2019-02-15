import React from "react";
import Tab from "./Tab";
import "../styles/Tabs.css";

class Tabs extends React.Component {
    
    constructor(props) {
        super(props);
        this.ELLIPSIS_ICON = "fa-ellipsis-v";
        this.CLOSE_ICON = "fa-times";
        this.state = {
            showNavicon : true,
            navicon : this.ELLIPSIS_ICON
        }
        this.toggleNavicon = this.toggleNavicon.bind(this)
    }

    toggleNavicon() {
        this.setState({
            showNavicon : !this.state.showNavicon,
            navicon : this.state.navicon === this.ELLIPSIS_ICON ? this.CLOSE_ICON : this.ELLIPSIS_ICON
        })
    }

    render() {
        const content = this.props.navigations && this.props.navigations.map((navigation, key) => {
            return (
                <Tab
                    key={key} 
                    id={navigation.id} 
                    active={this.props.activeTab} 
                    name={navigation.name} 
                    onClick={this.props.onActiveContentRootChange} />
            )
        });
        return (
            <div>
                <button id="navicon" className="navicon" onClick={this.toggleNavicon}><i className={"fas fa-lg " + this.state.navicon}></i></button>
                <nav id="tabs" className={"tabs "+(this.state.showNavicon ? "hide" : "")}>
                    {content}
                </nav>
            </div>
        )
    }
}

export default Tabs;