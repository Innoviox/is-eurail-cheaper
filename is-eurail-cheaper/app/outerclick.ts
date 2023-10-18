import { useRef, useEffect } from "react";


// https://stackoverflow.com/questions/71193818/react-onclick-argument-of-type-eventtarget-is-not-assignable-to-parameter-of-t
function assertIsNode(e: EventTarget | null): asserts e is Node {
    if (!e || !("nodeType" in e)) {
        throw new Error(`Node expected`);
    }
}

// https://stackoverflow.com/a/54292872/6342812
export function useOuterClick(callback: (e: Event) => void) {
    const callbackRef = useRef<(e: Event) => void>(); // initialize mutable ref, which stores callback
    const innerRef = useRef<HTMLDivElement>(null); // returned to client, who marks "border" element

    // update cb on each render, so second useEffect has access to current value
    useEffect(() => { callbackRef.current = callback; });

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
        function handleClick(e: MouseEvent) {
            assertIsNode(e.target);
            if (innerRef.current && callbackRef.current &&
                !innerRef.current.contains(e.target)
            ) callbackRef.current(e);
        }
    }, []); // no dependencies -> stable click listener

    return innerRef; // convenience for client (doesn't need to init ref himself)
}