import React from 'react'
import { Field, useField } from 'formik'

const UserForm = ({ label, className, ...props }) => {
    const [field, meta, actions] = useField(props);
    const style = `form-control ${className}`

    return (
        <div className="form-group form-control-sm mb-3">
            <label className="form-label" htmlFor="id">{label}</label>
            <Field className={`${style} ${meta.touched && meta.error ? "is-invalid" : ""}`} {...field}{...props} />
            {meta.touched && meta.error && <p className='text-danger'>{meta.error}</p>}
        </div >
    )
}

export default UserForm