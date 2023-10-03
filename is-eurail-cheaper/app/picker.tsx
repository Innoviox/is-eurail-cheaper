import React, { useState, useRef } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faDollarSign} from "@fortawesome/free-solid-svg-icons";

export default function Picker({data}) {
    let topRef = useRef();

    let [started, setStarted] = useState(false);
    let [classes, setClasses] = useState(data.map(_ => []));
    let [minShow, setMinShow] = useState(0);
    let [parentCl, setParentCl] = useState([]);
    let [open, setOpen] = useState(0); // 0 => closed, 1 => opening, 2 => open

    // let rect = elem.

    // let [positions, setPositions] = useState([]);

    function renderPricePickerElement(tripN: number) {
        let style = {};
        if (tripN !== 0) {
            style.top = topRef.current.offsetTop + (tripN * 24);
        }

        return (
            <div className={"tags has-addons price-picker " + classes[tripN].join(" ")}
                 key={tripN} ref={tripN === 0 ? topRef : undefined} style={style}>
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

    function animateOpen(n: number) {
        if (n === data.length) {
            setOpen(2);
            return;
        }

        setMinShow(n);
        let lst = ["animated", "flip", "hinge-from-front"];

        let newClasses = classes.map((_, idx) => {
            if (idx === n && n != 0) {
                return lst;
            } else {
                return [];
            }
        });

        setClasses(newClasses);
        setTimeout(() => animateOpen(n + 1), 300);
    }

    function animateClosed(n: number) {
        if (n === 0) {
            setOpen(0);
            setParentCl([]);
            return;
        }

        setMinShow(n);
        let lst = ["animated", "flip", "hinge-from-front", "backwards"];

        let newClasses = classes.map((_, idx) => {
            if (idx === n && n != 0) {
                return lst;
            } else {
                return [];
            }
        });

        setClasses(newClasses);
        setTimeout(() => animateClosed(n - 1), 300);
    }

    function startAnimation() {
        if (open === 1) {
            return;
        } else if (open === 0) {
            setHeights();

            setOpen(1);

            animateOpen(0);
        } else {
            setOpen(1);

            animateClosed(data.length);
        }
    }

    function setHeights() {

    }

    return (
        <div className={"flip-parent " + parentCl.join(" ")}>
            <div onClick={() => startAnimation()}>
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