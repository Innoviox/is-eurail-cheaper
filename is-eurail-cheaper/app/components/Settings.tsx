import { ChangeEvent, useState, createContext } from "react";
import { currencies } from '../util/utilities.ts';
export const CurrencyContext = createContext("$ (USD)");

export default function Settings({ visible, setVisible, setWeeksGlobal, setCurrencyGlobal }:
                                 { visible: boolean,
                                   setVisible: (visible: boolean) => void
                                   setWeeksGlobal: (weeks: number) => void,
                                   setCurrencyGlobal: (currency: string) => void }) {
    let [weeks, setWeeksInternal] = useState(2);
    let [currency, setCurrencyInternal] = useState("$ (USD)");

    function close() { // update global settings & make modal disappear
        setVisible(false);
        setWeeksGlobal(weeks);
        setCurrencyGlobal(currency);
    }

    return (
        <div className={"modal " + (visible ? "is-active" : "")}>
            <div className="modal-background settings-background" onClick={close}></div>
            <div className="modal-content" id="settings">
                <div className="background-white settings-content">
                    <div className="content">
                        <h2>Settings</h2>
                    </div>
                    <span>How far in the future to check for prices:</span>
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
                    <span>Currency to use:</span>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Currency</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="select">
                                    <select value={currency} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrencyInternal(e.target.value)}>
                                        {currencies.map((c) => {
                                            return <option key={c} value={c}>{c}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
    )
}