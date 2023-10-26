import {MutableRefObject} from "react";

export default function useMultiRefs(initialValue: any = null) {
    let currentRefs: MutableRefObject<any>[] = [];
    let refs = new Set(currentRefs);

    function getRefs() {
        if (initialValue && refs.size === 0) {
            return initialValue;
        }

        if (typeof document === "undefined") {
            console.log("do not run this on the server!");
            return Array.from(refs);
        } else {
            return Array.from(refs)
            //     .filter((ref) => {
            //     return document.contains(ref.current);
            // });
        }
    }

    function addRef(ref: MutableRefObject<any>) {
        if (ref !== null) {
            refs.add(ref);
        }
    }

    return [getRefs, addRef];
}