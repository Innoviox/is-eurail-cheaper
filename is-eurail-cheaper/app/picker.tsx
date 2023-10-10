import React, {useState, useRef, Dispatch} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faDollarSign} from "@fortawesome/free-solid-svg-icons";

export default function Picker({data, parentOpen, setFirst} : {data: [number, number][], parentOpen: boolean, setFirst: (n: number) => void}) {
    let topRef = useRef();

    let [started, setStarted] = useState(false);
    let [classes, setClasses]: [string[][], Dispatch<any>] = useState(data.map(_ => []));
    let [minShow, setMinShow] = useState(0);
    let [parentCl, setParentCl] = useState([]);
    let [open, setOpen] = useState(0); // 0 => closed, 1 => opening, 2 => open

    let tagClasses = calculateTagClasses();

    function calculateTagClasses() {
        let minprice = Math.min(...data.map(i => i[0]));
        let maxprice = Math.max(...data.map(i => i[0]));
        let mintime = Math.min(...data.map(i => i[1]));
        let maxtime = Math.max(...data.map(i => i[1]));

        return data.map(i => {
            let price = i[0];
            let time = i[1];

            let priceClass = "is-warning";
            if (price <= minprice * 1.2) {
                priceClass = "is-success";
            } else if (price >= maxprice * 0.8) {
                priceClass = "is-danger";
            }

            if (price === minprice) {
                priceClass += " cheapest";
            }

            let timeClass = "is-warning";
            if (time <= mintime * 1.2) {
                timeClass = "is-success";
            } else if (time >= maxtime * 0.8) {
                timeClass = "is-danger";
            }

            if (time === mintime) {
                timeClass += " cheapest cheapest-time";
            }

            return [priceClass, timeClass];
        });
    }

    function renderPricePickerElement(tripN: number) {
        let style = {};
        if (tripN !== 0 && topRef.current) {
            style.top = topRef.current.offsetTop + (tripN * 24);
        }

        return (
            <div className={"tags has-addons price-picker " + classes[tripN].join(" ") + (tripN === 0 ? " first" : "")}
                 key={tripN} ref={tripN === 0 ? topRef : undefined} style={style}
                 onClick={() => tripN !== 0 && startAnimation() && setFirst(tripN) }>
                <div className="tag is-info price-picker-tag">
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
                <div className={"tag price-picker-tag price " + tagClasses[tripN][0]}>
                    {data[tripN][0]}
                </div>

                <div className="tag is-info price-picker-tag">
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div className={"tag price-picker-tag length " + tagClasses[tripN][1]}>
                    {formatTime(data[tripN][1])}
                </div>
            </div>
        )
    }

    function formatTime(n: number): string {
        let hrs = Math.floor(n / 3600);
        let mins = `${Math.floor((n % 3600) / 60)}`.padStart(2, '0');
        return `${hrs}:${mins}`;
    }

    function animate(n: number, end: number) {
        setMinShow(n);

        if (end === 2 && n === data.length) {
            setOpen(2);
            setClasses(data.map(_ => ["on-top"]));
            return;
        } else if (end === 0 && n === 0) {
            setOpen(0);
            setClasses(data.map(_ => []));
            return;
        }

        let lst = ["animated", "flip", "hinge-from-front", "on-top"];
        if (end === 0) {
            lst.push("backwards");
        }

        let newClasses = classes.map((_, idx) => {
            if (idx === n && n != 0) {
                return lst;
            } else {
                return ["on-top"];
            }
        });

        setClasses(newClasses);

        let next = end === 0 ? n - 1 : n + 1;
        setTimeout(() => animate(next, end), 200);
    }

    function startAnimation() {
        if (open === 1) { // already animating => don't start
            return false;
        } else if (open === 0) {
            setOpen(1);
            animate(1, 2);
        } else {
            setOpen(1);
            animate(data.length - 1, 0);
        }

        return true;
    }

    if (parentOpen || open === 0) {
        return (
            <div className={"flip-parent " + parentCl.join(" ")}>
                <div onClick={() => startAnimation()}>
                    {renderPricePickerElement(0)}
                </div>

                {
                    data.map((_, i) => {
                        if (i > 0 && i <= minShow) {
                            return renderPricePickerElement(i);
                        }
                    })
                }
            </div>
        )
    } else if (open === 1) {

    } else if (open === 2) {
        startAnimation();
        return (
            <div className={"flip-parent " + parentCl.join(" ")}>
                <div>
                    {renderPricePickerElement(0)}
                </div>
            </div>
        );
    }
}