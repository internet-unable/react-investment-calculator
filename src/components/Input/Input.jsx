import { useState } from "react";

export default function Input({ label, type, initValue }) {
    const [value, setValue] = useState(initValue);
    const labelToId = label.split(' ').join('-').toLowerCase();

    function handleValueChange(event) {
        setValue(event.target.value);
    }

    return (
        <>
            <label htmlFor={labelToId}>{label}</label>
            <input
                id={labelToId}
                type={type}
                value={value}
                onChange={handleValueChange}
                placeholder={label}
            />
        </>
    );
}