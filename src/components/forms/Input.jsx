import React from 'react'

const Input = ({ label, name, type, id, value, onChange, required = false, placeholder, disabled = false, defaultValue=null }) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>
                {label} {required && <span className='text-red-600'>*</span>}
            </label>
            <input
                required={required}
                value={value}
                onChange={onChange}
                id={id}
                disabled={disabled}
                type={type}
                className='input-box'
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input