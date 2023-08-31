import React from "react";
import { FormEvent } from 'react'

export default function SearchBar({onSearch}) {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("onsubmit");

        await onSearch(event);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="control">
                <input className="input" type="text" name="city" placeholder="Next city..." />
            </div>
        </form>
    );
}