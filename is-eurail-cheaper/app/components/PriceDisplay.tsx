import Image, {StaticImageData} from "next/image";
import React, {ReactElement} from "react";

export default function PriceDisplay({children, img}: {children: ReactElement, img: StaticImageData}) {
    return (
        <div className="level">
            <div className="level-left">
                <div className="level-item">
                    <Image src={img} className="logo" alt="DB" />
                </div>
                <div className="level-item">
                    {children}
                </div>
            </div>
        </div>
    )
}