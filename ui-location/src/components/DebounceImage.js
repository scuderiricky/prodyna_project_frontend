import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { loadImage } from '../utils/ImageHelper.js';
import { Async } from "react-async"
import "./DebounceImage.css";
function DebounceImage() {
    const [imageUrl, setState] = useState("");

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Async promiseFn={() => loadImage(imageUrl)
                .then(city => {
                    if (city && city.cityImageUrl)
                        return city.cityImageUrl;
                    return imageUrl
                })} >
                <Async.Pending>Loading...</Async.Pending>
                <Async.Fulfilled>
                    {(data) => (
                        <div>
                            <img src={data} className="Image" alt="location" />
                        </div>
                    )}
                </Async.Fulfilled>
                <Async.Rejected>{error => `Something went wrong: ${error.message}`}</Async.Rejected>
            </Async>
            <DebounceInput className="DebounceInput"
                minLength={1}
                debouncetime={1000}
                onChange={(e) => {

                    let newImageUrl = e.target.value;

                    if (newImageUrl.includes(" ")) {
                        newImageUrl = newImageUrl.replace(/\s/g, "");
                    }
                    setState(newImageUrl);
                }
                } />
        </div>
    );

}

export default DebounceImage;