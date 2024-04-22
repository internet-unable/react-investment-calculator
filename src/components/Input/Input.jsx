import { useState } from "react";

export default function Input({ id, label, initValue, onValueChange }) {
    const [value, setValue] = useState(initValue);

    function handleValueChange(event) {
        setValue(event.target.value);
        onValueChange(id, event.target.value);
    }

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="number"
                value={value}
                onChange={handleValueChange}
                placeholder={label}
                required
            />
        </>
    );
}