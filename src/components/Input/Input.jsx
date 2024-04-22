import { useState } from "react";

export default function Input({ id, label, initValue, onUserInputChange }) {
    const [value, setValue] = useState(initValue);

    function handleValueChange(event) {
        setValue(event.target.value);
        onUserInputChange(id, event.target.value);
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
                min="1"
                required
            />
        </>
    );
}