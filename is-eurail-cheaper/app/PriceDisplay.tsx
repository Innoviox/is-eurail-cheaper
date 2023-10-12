import Image from "next/image";
import Picker from "@/app/picker";
import React from "react";

export default function PriceDisplay({children, img}) {
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