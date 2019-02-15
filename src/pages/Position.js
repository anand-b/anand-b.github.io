import React from "react";
import "../styles/Position.css";

const Position = (props) => {
    const positions = props.positionData && props.positionData.map(position => {
        return (
            <li key={position.id}className="position">{position.role} at <b>{position.org}</b></li>
        );
    });
    return (
        <ul className="positions">
            {positions}
        </ul>
    )
}

export default Position;