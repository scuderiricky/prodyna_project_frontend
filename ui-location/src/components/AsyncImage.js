import React, { useState } from 'react';
import { loadImage } from '../utils/ImageHelper.js';
import { Async } from "react-async"
import "./DebounceImage.css";

function validateAndGetCityUrl(city) {
    if (city && city.cityImageUrl)
        return city.cityImageUrl;
    return undefined;
}

function AsyncImage(props) {

    const query = props.urlQuery
    const loaded = props ? props.imageLoaded : false;
    const [imageLoaded, setImageLoaded] = useState(loaded ? loaded : false);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Async promiseFn={() => loadImage(query)
                .then(city => validateAndGetCityUrl(city))
                .then(url=> fetch(url)
                        .then(res=> res.blob())
                        .then(res=>URL.createObjectURL(res))
                        .catch(err=>console.error(err)))} >
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