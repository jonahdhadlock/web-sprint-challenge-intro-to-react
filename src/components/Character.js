// Write your Character component here
import React from 'react';

function Character(props) {
    console.log(props)
    return (
        <div>
            <h1 id="name">{props.name}</h1>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40566fcb-4a90-4e94-baa6-5185bc7b29a5/d72vnhh-aeba5ef6-6597-4658-9909-1cb61e7688d7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDA1NjZmY2ItNGE5MC00ZTk0LWJhYTYtNTE4NWJjN2IyOWE1XC9kNzJ2bmhoLWFlYmE1ZWY2LTY1OTctNDY1OC05OTA5LTFjYjYxZTc2ODhkNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.sb1sURxdgSUbHFOdUPKJBo6cTpy-jxjwlpdPE4EWdv0" alt="Darth Vader" id="darthVader" />
        </div>
    );
}

export default Character;