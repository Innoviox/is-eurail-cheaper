export default function Guide({ visible, setVisible }:
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
                        <h3>FAQ</h3>
                        <h5>What is this?</h5>
                        <p>
                            This is a tool designed for people who have a plan of cities they want to travel to
                            and are curious about their options. Frequently when planning these travels, you need
                            to have dozens of tabs open to check the prices of different modes of transport and how
                            long everything takes. The eventual goal of this website is to consolidate that
                            information to streamline the process of actually going on the trip, once you have picked some cities.
                        </p>
                        <h5>Why don&lsquo;t I recognize the names of the stations?</h5>
                        <p>
                            The current API is based on the DeutscheBahn stations and so will show the German names for the cities.
                            I am working on this.
                        </p>
                        <h5>What does the data mean?</h5>
                        <p>
                            Each trip shows its total price and its total duration. The green/yellow/red represents the
                            price/duration spread <i>for that provider</i>, not overall. The cheapest and fastest for each
                            provider get a little star.
                        </p>
                        <h5>What does the eurail price mean?</h5>
                        <p>
                            The app calculates the total price of the seat reservations plus the cost of the cheapest pass
                            that could complete your trip. You can click it to see the sum or the individual prices.
                        </p>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={close}></button>
        </div>
    )

}