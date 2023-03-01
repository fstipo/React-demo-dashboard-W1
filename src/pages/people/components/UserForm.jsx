import React from 'react'

const UserForm = () => {
    return (
        <div className="form-group form-control-sm mb-3">
            <label className="form-label" htmlFor="id">ID</label>
            <input type="" className="form-control bg-gray-400" id="id" placeholder="ID" readOnly disabled />
        </div>
    )
}

export default UserForm