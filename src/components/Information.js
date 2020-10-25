import React from 'react';

function Information(props) {
    return (
        <div id="infoText">
            <ul id="infoList">
                <li>Species: human</li>
                <li>Gender: {props.gender}</li>
                <li>Height: {props.height}cm</li>
                <li>Mass: {props.mass}kg</li>
                <li>Birth: 41.9BBY</li>
                <li>Planet: Tatooine</li>
                <li>Alignment: Dark</li>
            </ul>
        </div>
    );
}

export default Information;
