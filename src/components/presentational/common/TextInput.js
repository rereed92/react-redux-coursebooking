import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, placeholder, value, onChange }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div>
                <input
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
 
export default TextInput;
