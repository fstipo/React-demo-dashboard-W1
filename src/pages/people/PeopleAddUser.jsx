import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { basicSchema } from '../../schemas'
import { useAddUser } from '../../hooks/usePeople'
import { toast } from 'react-toastify'
import "./people.css"


const PeopleAddUser = () => {
    const navigate = useNavigate()
    const { mutate: addUser } = useAddUser();
    const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            id: '',
            name: '',
            sector: ''
        },
        validationSchema: basicSchema,
        onSubmit: (values) => {
            let newUser = {
                "id": values.id.toString(),
                "name": values.name,
                "sector": values.sector,
            }

            if (values.id !== "" && values.name !== "" && values.sector !== "") {
                addUser(newUser);
                toast.success("User successfully created");
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
                    <li className="breadcrumb-item active">Add User</li>
                </ul>
                {/* <div className="d-flex align-items-center mb-3">
                    <h1 className="page-header mb-0">Add User</h1>
                </div> */}
            </div >
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-lg-8 col-xl-7 col-xxl-5' >
                        <form autoComplete='off' name="login_form" onSubmit={handleSubmit}>
                            <div className='d-flex align-items-center mb-3'>
                                <a className="btn btn-default" onClick={() => navigate("/people")}>
                                    <i className="fa fa-chevron-left fa-fw ms-n1"></i>
                                    Back
                                </a>

                                <div className="ms-auto">
                                    <button type="submit" disabled={isSubmitting} className="btn bg-theme text-white">
                                        Save changes
                                    </button>
                                </div>
                            </div>

                            <hr />

                            {/* // form fields */}
                            <div className="mb-3">
                                <label className="form-label" htmlFor='id'>ID</label>
                                <input
                                    id='id'
                                    type="number"
                                    className={`${style} ${errors.id && touched.id ? "input-error" : ""}`}
                                    // value=""
                                    placeholder="User ID"
                                    value={values.id}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                {errors.id && touched.id && <p className='text-danger'> {errors.id}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor='name' className="form-label">Full Name</label>
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
                                <label htmlFor='sector' className="form-label">Sector</label>
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

                            <div className="mb-5">
                            </div>

                        </form>
                        <hr />
                    </div>

                </div >
            </div>
        </div>





    )
}

export default PeopleAddUser