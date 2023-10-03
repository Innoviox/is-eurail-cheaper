import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faDollarSign} from "@fortawesome/free-solid-svg-icons";

export default function Picker({data}) {
    let [started, setStarted] = useState(false);
    let [classes, setClasses] = useState(data.map(_ => []));
    let [minShow, setMinShow] = useState(0);
    let [parentCl, setParentCl] = useState([]);

    function renderPricePickerElement(tripN: number) {
        return (
            <div className={"tags has-addons price-picker " + classes[tripN].join(" ")} key={tripN}>
                <div className="tag is-info price-picker-tag">
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <div className="tag is-success price-picker-tag">
                    {data[tripN][0]}
                </div>

                <div className="tag is-info price-picker-tag">
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="tag is-success price-picker-tag">
                    {data[tripN][1]}
                </div>
            </div>
        )
    }

    function animate(n: number) {
        if (n === data.length) {
            return;
        }

        setMinShow(n);
        let lst = ["animated", "flip", "backwards"];
        let newClasses = classes.map((_, idx) => {
            if (idx === n && n != 0) {
                return lst;
            } else {
                return [];
            }
        });

        setClasses(newClasses);
        console.log(newClasses);
        setTimeout(() => animate(n + 1), 300);
    }

    function startAnimation(n: number) {
        setParentCl(["enlarge"]);

        animate(n);
    }

    return (
        <div className={"flip-parent " + parentCl.join(" ")}>
            <div onClick={() => startAnimation(0)}>
                { renderPricePickerElement(0) }
            </div>

            {
                data.map((_, i) => {
                    if (i > 0 && i <= minShow) {
                        return renderPricePickerElement(i);
                    }
                })
            }
        </div>
    );
}