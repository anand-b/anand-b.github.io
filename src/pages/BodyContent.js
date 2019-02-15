import React from "react";
import content from "./content";
import "../styles/BodyContent.css";

class BodyContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const contentData = content[this.props.activeTab] && content[this.props.activeTab].map((data, key)=> {
            const innerContentData = data.what.map((whatData, whatKey) => {
                return (
                    <li key={whatKey}>
                        <p className="title">{whatData.title}</p>
                        <p className="description">{whatData.description}</p>
                    </li>
                )
            })
            return (
                <div key={key}>
                    <h1 className="when">{data.when}</h1>
                    <ul>{innerContentData}</ul>
                </div>
            )
        })
        const activeTab = this.props.activeTab;
        const title = this.props.navigations && this.props.navigations.filter((val) => {
            return val.id == activeTab;
        })[0].name;
        return (  
            <section className="highlights">
                <h1 className="section">{title}</h1>
                {contentData}
            </section>
        )
        
    }
}

export default BodyContent;