import React from "react";
import DisplayPicture from "./DisplayPicture";
import bio from "./bio";
import Name from "./Name";
import Position from "./Position";
import SocialProfiles from "./SocialProfiles";
import "../styles/TitleCard.css";

class TitleCard extends React.Component {
    render() {
        return (
            <section className="bio">
                <DisplayPicture src="/static/images/anand.jpg"></DisplayPicture>
                <div className="headline">
                    <Name fullName={`${bio.name.firstName} ${bio.name.lastName}`}></Name>
                    <Position positionData={bio.positions}></Position>
                    <SocialProfiles positionData={bio.social}></SocialProfiles>
                </div>
            </section>
        )
    }
}

export default TitleCard;