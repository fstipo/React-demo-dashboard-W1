import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { basicSchema } from '../../schemas'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./people.css"

const PeopleUserDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            id: '',
            name: '',
            sector: ''
        },
        validationSchema: basicSchema,
        onSubmit: (values, actions) => {
            let newUser = {
                "id": values.id.toString(),
                "name": values.name,
                "sector": values.sector,
            }

            if (values.id !== "" && values.name !== "" && values.sector !== "") {
                addUser(newUser);
                toast.success("User successfully created");
                actions.resetForm();
            }

        }
    })

    const style = "form-control form-control-lg fs-15px"

    return (
        <div id="content" className="app-content">
            <div>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/people">People</Link></li>
                    <li className="breadcrumb-item active">User Details</li>
                </ul>
                <div className="d-flex align-items-center mb-3">
                    <h1 className="page-header mb-0">User Details: {id}</h1>
                </div>
            </div >


            <div className="card container">
                <div className="container p-5">
                    <form action="index.html" autoComplete='off' name="login_form" onSubmit={handleSubmit}>

                        {/* // form fields */}
                        <div className="mb-3">
                            <label className="form-label" htmlFor='id'>ID</label>
                            <input
                                id='id'
                                type="number"
                                className={style}
                                // value=""
                                placeholder="User ID"
                                value={values.id}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                readOnly="readonly"
                                disabled
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor='name' className="form-label">Full Name *</label>
                            <input
                                id='name'
                                type="text"
                                className={`${style} ${errors.name && touched.name ? "input-error" : ""}`}
                                placeholder="User full name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}


                            />
                            {errors.name && touched.name && <p className='text-danger'> {errors.name}</p>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor='sector' className="form-label">Sector *</label>
                            <input
                                id='sector'
                                type="text"
                                className={`${style} ${errors.sector && touched.sector ? "input-error" : ""}`}
                                placeholder="User sector"
                                value={values.sector}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.sector && touched.sector && <p className='text-danger'> {errors.sector}</p>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor='id'>Changed At</label>
                            <input
                                id='id'
                                type="number"
                                className={style}
                                // value=""
                                placeholder="Changed At"
                                value={values.id}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                readOnly="readonly"
                                disabled
                            />
                        </div>

                        <div className="mb-5">
                        </div>
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="btn bg-theme text-white btn-lg d-block w-100 fw-500 mb-3"
                        >
                            Delete
                        </button>
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="btn bg-theme text-white btn-lg d-block w-100 fw-500 mb-3"
                        >
                            Update
                        </button>
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="btn bg-theme text-white btn-lg d-block w-100 fw-500 mb-3"
                        >
                            History
                        </button>
                        <button
                            disabled={isSubmitting}
                            onClick={navigate("/people")}
                            type="submit"
                            className="btn bg-theme text-white btn-lg d-block w-100 fw-500 mb-3"
                        >
                            Back
                        </button>
                    </form>
                </div>

            </div >
        </div >
    )
}

export default PeopleUserDetails