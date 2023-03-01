import React from 'react'
import { useField } from 'formik'

const UserForm = ({ label, className, ...props }) => {
    const [field, meta, actions] = useField(props);
    const style = `form-control ${className}`

    return (
        <div className="form-group form-control-sm mb-3">
            <label className="form-label" htmlFor="id">{label}</label>
            <input className={style} {...field}{...props} />
        </div>
    )
}

export default UserForm