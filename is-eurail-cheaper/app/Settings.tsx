import {ChangeEvent, useState} from "react";

export default function Settings({ visible, setVisible }:
                                 { visible: boolean, setVisible: (visible: boolean) => void }) {
    let [weeks, setWeeks] = useState(2);

    return (
        <div className={"modal " + (visible ? "is-active" : "")}>
            <div className="modal-background" onClick={() => setVisible(false)}></div>
            <div className="modal-content">
                <div className="background-white">
                    <label className="label">{weeks} Week{weeks === 1 ? "" : "s"}</label>
                    <input type="range" step={1} min={0} max={12} value={weeks}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setWeeks(parseInt(e.target.value))} />
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => setVisible(false)}></button>
        </div>
    )
}