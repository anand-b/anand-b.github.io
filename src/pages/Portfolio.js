import React from "react";
import TitleCard from "./TitleCard";
import CommonIncludes from "./CommonIncludes";
import Tabs from "./Tabs";
import BodyContent from "./BodyContent";
import Footer from "./Footer";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.navigations = [
            {
                "id" : "education",
                "name" : "📚 Education"
            },
            {
                "id" : "experience",
                "name" : "👨‍💻 Experience"
            },
            {
                "id" : "achievements",
                "name" : "🏅 Achievements"
            },
            {
                "id" : "activities",
                "name" : "👨‍🏫 Activities"
            }
        ]
        this.state = {
            activeContentRoot : this.navigations[0].id
        };
        this.updateActiveContentRoot = this.updateActiveContentRoot.bind(this);
    }

    updateActiveContentRoot(newRoot) {
        this.setState({
            activeContentRoot : newRoot
        })
    }

    render() {
        return (
            <div className="container">
                <CommonIncludes />
                <TitleCard />
                <Tabs navigations={this.navigations} activeTab={this.state.activeContentRoot} onActiveContentRootChange={this.updateActiveContentRoot} />
                <hr />
                <BodyContent navigations={this.navigations} activeTab={this.state.activeContentRoot} />
                <hr />
                <Footer />
            </div>
        )
    }
}

export default Portfolio;