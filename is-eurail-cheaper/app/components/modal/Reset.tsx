export default function Reset({ visible, setVisible, reset }:
                                  { visible: boolean,
                                    setVisible: (visible: boolean) => void,
                                    reset: () => void }) {

    function close() { // update global settings & make modal disappear
        setVisible(false);
    }

    function doReset() {
        reset();
        close();
    }

    return (
        <div className={"modal " + (visible ? "is-active" : "")}>
            <div className="modal-background settings-background" onClick={close}></div>
            <div className="modal-card settings">
                <header className="modal-card-head">
                    <p className="modal-card-title">Reset</p>
                </header>
                <section className="modal-card-body">
                    <p>Are you sure you want to reset?</p>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-danger" onClick={doReset}>Reset</button>
                    <button className="button" onClick={close}>Cancel</button>
                </footer>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
    )
}