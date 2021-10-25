import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import "./DebounceImage.css";
import { removeWhiteSpace } from '../utils/StringHelper.js';
import AsyncImage from './AsyncImage.js';

function DebounceImage() {
    const [cityName, setState] = useState("");
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <AsyncImage urlQuery={cityName} imageLoaded={imageLoaded}/>
            <DebounceInput className="DebounceInput"
                minLength={1}
                debounceTimeout={1000}
                placeholder={"Enter your city name"}
                onChange={(e) => {
                    setImageLoaded(false);
                    setState(removeWhiteSpace(e.target.value));
                }
                } />
        </div>
    );

}

export default DebounceImage;