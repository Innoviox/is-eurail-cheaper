import React, { useState, useRef, Dispatch, LegacyRef, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faHourglassStart, faArrowUpRightFromSquare, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

import { Result } from '../util/types.ts';
import { SettingsContext } from '../util/contexts.ts';
import { fromUSD } from "@/app/util/utilities.ts";
import Image from "next/image";

const hours_minutes = (d: Date) => `${d.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}:${d.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`

export default function Picker({ data, parentOpen, setFirst, setStops } :
                               { data: Result[], parentOpen: boolean, setFirst: (n: number) => void, setStops: (n: number) => void }) {
    const settings = useContext(SettingsContext);

    let topRef = useRef<HTMLElement>(null);

    let [classes, setClasses]: [string[][], Dispatch<any>] = useState(data.map(_ => []));
    let [minShow, setMinShow] = useState(0);
    let [open, setOpen] = useState(0); // 0 => closed, 1 => opening, 2 => open

    let tagClasses = calculateTagClasses();

    let [img, setImg] = useState(data[0].image);

    function calculateTagClasses() {
        let minprice = Math.min(...data.map(i => i.price));
        let maxprice = Math.max(...data.map(i => i.price));
        let mintime = Math.min(...data.map(i => i.length));
        let maxtime = Math.max(...data.map(i => i.length));

        return data.map(i => {
            let price = i.price;
            let time = i.length;

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
        let style = { top: 0 };
        if (tripN !== 0 && topRef.current) {
            style.top = topRef.current.offsetTop + (tripN * 24);
        }

        return (
            <>
            <div className={"tags has-addons price-picker " + classes[tripN].join(" ") + (tripN === 0 ? " first" : "")}
                 key={tripN} ref={tripN === 0 ? topRef as LegacyRef<HTMLDivElement> : undefined} style={style}
                 onClick={() => {
                     if (startAnimation() && tripN !== 0) {
                         setFirst(tripN);
                         setStops(tripN);
                         setImg(data[tripN].image);
                     }
                 }}
                 onMouseEnter={() => {
                     if (open !== 1) {
                         setStops(tripN);
                         setImg(data[tripN].image);
                     }
                 }}>
                <div className="tag is-info price-picker-tag">
                    { settings.currency.split(" ")[0] }
                </div>
                <div className={"tag price-picker-tag price " + tagClasses[tripN][0]}>
                    { fromUSD(data[tripN].price, settings.currency) }
                </div>

                <div className="tag is-info price-picker-tag">
                    <FontAwesomeIcon icon={faHourglassStart} />
                </div>
                <div className={"tag price-picker-tag length " + tagClasses[tripN][1]}>
                    { formatTime(data[tripN].length) }
                </div>

                {
                    tripN === 0 ?
                        <div className="tag price-picker-tag">
                            <FontAwesomeIcon icon={open === 0 ? faCaretDown : faCaretUp} />
                        </div>
                        : <></>
                }
            </div>
            {
                tripN === 0 ?
                    <div className="tag price-picker-tag link-tag is-link">
                        <a href={data[tripN].link} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    : <></>
            }
            {
                data[tripN].incomplete ?
                    <div className="has-tooltip-bottom">
                        <FontAwesomeIcon icon={faTriangleExclamation} className="warning"/>
                        <div className="tooltip warning-tooltip">
                            <span>One or more of the segments of this trip has missing price information.</span>
                        </div>
                    </div>
                    : <></>
            }
            </>
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

    function priceElements() {
        if (parentOpen || open === 0) {
            return (
                <div className={"flip-parent "}>
                    <div className="price-container">
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
            setOpen(0);
            animate(0, 0);
            return (
                <div className={"flip-parent "}>
                    <div>
                        {renderPricePickerElement(0)}
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="level">
            <div className="level-left">
                <div className="level-item">
                    <Image src={img} className="logo" alt="" />
                </div>
                <div className="level-item">
                    {priceElements()}
                </div>
            </div>
        </div>
    )
}