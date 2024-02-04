import React from 'react'

const Select = ({ label, name, id, value, onChange, required = false, disabled = false, children }) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{label}  {required && <span className='text-red-600'>*</span>}</label>
            <select name={name}
                required={required}
                value={value}
                id={id}
                disabled={disabled}
                onChange={onChange}>
                {children}
            </select>
        </div>
    )
}

export default Select