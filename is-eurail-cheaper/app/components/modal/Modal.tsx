// import React, {ReactElement, useState} from "react";
//
// export default function Modal({ child }: { child: ReactElement }) {
//     let [visible, setVisible] = useState(false);
//
//     return (
//         <div className={"modal " + (visible ? "is-active" : "")}>
//             <div className="modal-background settings-background" onClick={close}></div>
//             <div className="modal-content settings">
//                 <div className="background-white settings-content">
//                 </div>
//             </div>
//             <button className="modal-close is-large" aria-label="close" onClick={close}></button>
//         </div>
//     )
// }