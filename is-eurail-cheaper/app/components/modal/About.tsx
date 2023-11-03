export default function About({ visible, setVisible }:
                              { visible: boolean,
                                setVisible: (visible: boolean) => void }) {

    function close() { // update global settings & make modal disappear
        setVisible(false);
    }

    return (
        <div className={"modal " + (visible ? "is-active" : "")}>
            <div className="modal-background settings-background" onClick={close}></div>
            <div className="modal-content settings">
                <div className="background-white settings-content">
                    <div className="content">
                        <h3>Made by Simon Chervenak <a href={"https://innoviox.github.io"}>(@innoviox)</a> with <a href={"https://nextjs.org/"}>Next.js</a></h3>
                        <p><a href="https://github.com/Innoviox/is-eurail-cheaper">Fully open source.</a></p>
                        <p>Also made with <a href="https://bulma.io/documentation/overview/start/">Bulma</a>.</p>
                        <p>Thanks to <a href="https://fontawesome.com/">Fontawesome</a>, <a href="https://www.flaticon.com/free-icons/plane" title="plane icons">Darius Dan</a>, Freepik (<a href="https://www.flaticon.com/free-icons/train" title="train icons">1</a>, <a href="https://www.flaticon.com/free-icons/bus" title="bus icons">2</a>, <a href="https://www.flaticon.com/free-icons/tram" title="tram icons">3</a>, <a href="https://www.flaticon.com/free-icons/scale" title="scale icons">4</a>), <a href="https://www.flaticon.com/free-icons/boat" title="boat icons">smalllikeart</a>, and <a href="https://www.flaticon.com/free-icons/price-comparison" title="price comparison icons">amonrat rungreangfangsai</a> for the icons.</p>
                        <p>Thanks to <a href="https://github.com/juliuste">Julius Tens</a> for the inspiration and the stations search code.</p>
                        <p>Thanks to <a href="https://en.m.wikipedia.org/">Wikipedia</a> for the logo image files.</p>
                        <p>Mapping data is from the <a href="https://developers.google.com/maps">Google Maps API</a>, integrated into React with help from <a href="https://github.com/leighhalliday/google-maps-threejs">Leigh Halliday</a>.</p>
                        <p>Pricing data is from the <a href="https://transport.rest/">transport.rest</a> and <a href="https://www.eurail.com/en">eurail</a> APIs.</p>
                        <p>Thanks to these posts (
                            <a href="https://stackoverflow.com/questions/71193818/react-onclick-argument-of-type-eventtarget-is-not-assignable-to-parameter-of-t">1</a>,&nbsp;
                            <a href="https://stackoverflow.com/a/54292872/6342812">2</a>,&nbsp;
                            <a href="https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258">3</a>,&nbsp;
                            <a href="https://stackoverflow.com/questions/3793397/html5-canvas-drawimage-with-at-an-angle">4</a>,&nbsp;
                            <a href="https://stackoverflow.com/questions/68324216/next-js-image-is-not-defined">5</a>,&nbsp;
                            <a href="https://stackoverflow.com/questions/1776915/how-can-i-center-an-absolutely-positioned-element-in-a-div">6</a>,&nbsp;
                            <a href="https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary">7</a>,&nbsp;
                            <a href="https://www.coding-dude.com/wp/css/css-star/#:~:text=To%20make%20this%204%20points,and%20the%20other%20rotates%20%2D45deg%20.">8</a>,&nbsp;
                            <a href="https://stackoverflow.com/questions/33766350/how-to-perfectly-center-a-plus-sign-in-a-circle-using-css">9</a>,&nbsp;
                            <a href="https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element">10</a>,&nbsp;
                            <a href="https://stackoverflow.com/questions/37949981/call-child-method-from-parent">11</a>,&nbsp;
                            <a href="https://www.reddit.com/r/nextjs/comments/qxyf2u/nextjs_fouc/">12</a>,&nbsp;
                            <a href="https://stackoverflow.com/questions/57609931/next-js-with-fortawesome-and-ssr">13</a>,&nbsp;
                            <a href="https://medium.com/@albigiu/trenitalia-shock-non-crederete-mai-a-queste-api-painful-14433096502c">14</a>
                            ) for helping me during the development process, as well as probably others that I forgot to save.</p>
                        <p>Please let me know at sarras305-at-gmail or at the <a href="https://github.com/Innoviox/is-eurail-cheaper/issues">issues board</a> of any bugs or feature recommendations.</p>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
    )
}