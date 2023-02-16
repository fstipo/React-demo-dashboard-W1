import React from 'react'

const PeopleRow = ({ id, name, date, sector }) => {
    return (
        <tr>
            <td className="w-10px align-middle">
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="product1"
                    />
                    <label className="form-check-label" for="product1"></label>
                </div>
            </td>
            <td className="align-middle">{id}</td>
            <td className="align-middle">{name}</td>
            <td className="align-middle">{date}</td>
            <td className="align-middle">{sector}</td>
        </tr>
    )
}

export default PeopleRow