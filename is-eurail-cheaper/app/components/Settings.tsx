import {ChangeEvent, useState} from "react";

export default function Settings({ visible, setVisible, setWeeksGlobal }:
                                 { visible: boolean,
                                   setVisible: (visible: boolean) => void
                                   setWeeksGlobal: (weeks: number) => void }) {
    let [weeks, setWeeksInternal] = useState(2);

    function close() { // update global settings & make modal disappear
        setVisible(false);
        setWeeksGlobal(weeks);
    }

    return (
        <div className={"modal " + (visible ? "is-active" : "")}>
            <div className="modal-background settings-background" onClick={close}></div>
            <div className="modal-content" id="settings">
                <div className="background-white settings-content">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">{weeks} week{weeks === 1 ? "" : "s"}</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <input type="range" step={1} min={0} max={12} value={weeks} id="weeks"
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => setWeeksInternal(parseInt(e.target.value))} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
    )
}