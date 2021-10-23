import React, { useState } from 'react';
import { loadImage } from '../utils/ImageHelper.js';
import { Async } from "react-async"
import "./DebounceImage.css";

function validateAndGetCity(city, alternativeUrl) {
    if (city && city.cityImageUrl)
        return city.cityImageUrl;
    return alternativeUrl
}

function AsyncImage(props) {

    const query = props.urlQuery
    const loaded = props ? props.imageLoaded : false;
    const [imageLoaded, setImageLoaded] = useState(loaded ? loaded : false);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Async promiseFn={() => loadImage(query).then(city => validateAndGetCity(city, query))} >
                <Async.Pending>Loading...</Async.Pending>
                <Async.Fulfilled>
                    {(data) => (
                        <div>
                            {!imageLoaded ? <Async.Pending>Loading...</Async.Pending> : null}
                            <img style={{ visibility: imageLoaded }} onLoad={() => setImageLoaded(true)} src={data} className="Image" alt="location" />
                        </div>
                    )}
                </Async.Fulfilled>
                <Async.Rejected>{error => `Something went wrong: ${error.message}`}</Async.Rejected>
            </Async>
        </div>
    );

}

export default AsyncImage;