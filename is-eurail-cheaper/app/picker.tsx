import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faDollarSign} from "@fortawesome/free-solid-svg-icons";

export default function Picker({data}) {
    function renderPricePickerElement(idx: number, lst: any[], tripN: number) {
        return (
            <div className="tags has-addons price-picker">
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

    return (
        <div className="">
            <div onClick={() => add("picker", picker[idx] === lstname ? "" : lstname, idx)}>
                { renderPricePickerElement(idx, lst, 0) }
            </div>

            { picker[idx] === lstname ?
                <div>
                    {
                        lst[idx].map((data, i) => {
                            if (i !== 0) {
                                return renderPricePickerElement(idx, lst, i);
                            }
                        })
                    }
                </div>
                : <></>
            }
        </div>
    );
}