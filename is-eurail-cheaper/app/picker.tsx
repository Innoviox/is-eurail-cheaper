import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faDollarSign} from "@fortawesome/free-solid-svg-icons";

export default function Picker({data}) {
    let [started, setStarted] = useState(false);
    let [classes, setClasses] = useState(data.map(_ => []));

    function renderPricePickerElement(tripN: number) {
        return (
            <div className={"tags has-addons price-picker " + classes[tripN].join(" ")}>
                <div className="tag is-info">
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <div className="tag is-success">
                    {data[tripN][0]}
                </div>

                <div className="tag is-info">
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="tag is-success">
                    {data[tripN][1]}
                </div>
            </div>
        )
    }

    function startAnimation() {
        setClasses([["animated", "flipInX"]]);
    }

    return (
        <div className="">
            <div onClick={startAnimation}>
                { renderPricePickerElement(0) }
            </div>

            { started ?
                <div>
                    {
                        data.map((_, i) => {
                            if (i !== 0) {
                                return renderPricePickerElement(i);
                            }
                        })
                    }
                </div>
                : <></>
            }
        </div>
    );
}