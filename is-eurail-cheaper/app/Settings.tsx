export default function Settings({ visible, setVisible }:
                                 { visible: boolean, setVisible: (visible: boolean) => void }) {
    return (
        <div className={"modal " + (visible ? "is-active" : "")}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="background-white">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Weeks 1</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input type="range" step={1} min={0} max={12} value={2} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => setVisible(false)}></button>
        </div>
    )
}