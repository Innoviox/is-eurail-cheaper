export default function About({ visible, setVisible }:
                                     { visible: boolean,
                                         setVisible: (visible: boolean) => void }) {

    function close() { // update global settings & make modal disappear
        setVisible(false);
    }

    return (
        <div className={"modal " + (visible ? "is-active" : "")}>
            <div className="modal-background settings-background" onClick={close}></div>
            <div className="modal-content" id="settings">
                <div className="background-white settings-content">
                    <div className="content">
                        <h3>Made by Simon Chervenak <a href={"https://innoviox.github.io"}>(@innoviox)</a> with <a href={"https://nextjs.org/"}>Next.js</a></h3>
                        <span>Thanks to <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Darius Dan</a>, Freepik (<a href="https://www.flaticon.com/free-icons/train" title="train icons">1</a>, <a href="https://www.flaticon.com/free-icons/bus" title="bus icons">2</a>, <a href="https://www.flaticon.com/free-icons/tram" title="tram icons">3</a>, <a href="https://www.flaticon.com/free-icons/scale" title="scale icons">4</a>
), <a href="https://www.flaticon.com/free-icons/boat" title="boat icons">smalllikeart</a>, and <a href="https://www.flaticon.com/free-icons/price-comparison" title="price comparison icons">amonrat rungreangfangsai</a> for the icons.</span>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
    )
}