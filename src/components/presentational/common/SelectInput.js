import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({name, label, onChange, defaultOption, value, options}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div>
                <select
                    name={name}
                    value={value}
                    onChange={onChange}>
                    <option value="">{defaultOption}</option>
                        {options.map((option) => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })}
                    </select>
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};
 
export default SelectInput;