import React from 'react';
import './form-input.styles.scss';
const FormInput = ({ handleChange, label, ...otherProps }) => {
    const labelStyle = otherProps.value.length ? 'shrink' : '';
    return (
        <div className="group">
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {
                label ? <label className={labelStyle + 'form-input-label'}>{label}</label> : null
            }
        </div>
    )
}
export default FormInput;