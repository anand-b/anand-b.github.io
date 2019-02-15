import React from "react";
import "../styles/SocialProfiles.css";

const SocialProfiles = (props) => {
    const profiles = props.positionData && props.positionData.map((profile) => {
        return (
            <li key={profile.id} className="profile">
                <a href={profile.url} target="_blank" title={profile.name}><i className={profile.icon}></i></a>
            </li>
        );
    });

    return (
        <ul className="profiles">
            {profiles}
        </ul>
    )
}

export default SocialProfiles;