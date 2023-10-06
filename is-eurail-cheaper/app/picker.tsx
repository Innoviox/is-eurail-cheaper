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

    function renderPricePickerElement(tripN: number) {
        let style = {};
        if (tripN !== 0) {
            style.top = topRef.current.offsetTop + (tripN * 24);
        }

        return (
            <div className={"tags has-addons price-picker " + classes[tripN].join(" ") + (tripN === 0 ? " first" : "")}
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
                    {formatTime(data[tripN][1])}
                </div>
            </div>
        )
    }

    function formatTime(n: number): string {
        let hrs = Math.floor(n / 3600);
        let mins = Math.floor((n % 3600) / 60);
        return `${hrs}:${mins}`;
    }

    function animateOpen(n: number) {
        if (n === data.length) {
            setOpen(2);
            setMinShow(n);
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
        setTimeout(() => animateOpen(n + 1), 200);
    }

    function animateClosed(n: number) {
        if (n === 0) {
            setOpen(0);
            setMinShow(n);
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
        setTimeout(() => animateClosed(n - 1), 200);
    }

    function startAnimation() {
        if (open === 1) {
            return;
        } else if (open === 0) {
            setOpen(1);
            animateOpen(1);
        } else {
            setOpen(1);
            animateClosed(data.length);
        }
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