import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, useFormik, Field } from 'formik'
import { basicSchema } from '../../schemas'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./people.css"
import { useUserDetails, useRemoveUser, useUpdateUser } from "../../hooks/usePeople"
import { dateFormat } from "../../utils/utils"
import { Formik } from 'formik'


const PeopleUserDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: userDetail
    } = useUserDetails(id);
    const { mutateAsync: removeUser } = useRemoveUser(id);
    const { mutateAsync: updateUser } = useUpdateUser(id);

    const deleteUserHandler = () => {
        removeUser();
        toast.error("User is deleted!");
        setTimeout(() => {
            navigate("/people");
        }, 1000);
    }



    // const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
    //     initialValues: {
    //         id: userDetail?.id || '',
    //         name: userDetail?.name || '',
    //         sector: userDetail?.sector || '',
    //         changedAt: dateFormat(userDetail?.changedAt) || ""
    //     },
    //     validationSchema: basicSchema,
    //     onSubmit: (userDetail) => {
    //         if (userDetail.name !== "" && userDetail.sector !== "") {
    //             const newData = {
    //                 ...userDetail,
    //                 "name": userDetail.name ? values.name : userDetail.name,
    //                 "sector": userDetail.sector ? values.sector : userDetail.sector
    //             };
    //             toast.info("User successfully updated!");
    //             updateUser(newData)
    //         }

    //     }
    // })

    const style = "form-control form-control-lg fs-15px"

    return (
        <div id="content" className="app-content">
            <div>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/people">People</Link></li>
                    <li className="breadcrumb-item active">User Details</li>
                </ul>
                <div className='d-flex align-items-center mb-3'>
                    <a className="btn btn-default" onClick={() => navigate("/people")}>
                        <i className="fa fa-chevron-left fa-fw ms-n1"></i>
                        Back
                    </a>
                </div>
                <hr />
                {/* <div className="d-flex align-items-center mb-3">
                    <h1 className="page-header mb-0">User Details</h1>
                </div> */}
            </div >


            <div className="card container">
                <div className="container p-5">
                    <Formik
                        initialValues={{
                            id: userDetail?.id || '',
                            name: userDetail?.name || '',
                            sector: userDetail?.sector || '',
                            changedAt: dateFormat(userDetail?.changedAt) || ""
                        }}
                        enableReinitialize={true}
                        // validationSchema={advancedSchema}




                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }, 1000);
                        }}
                    >
                        {isSubmitting => (
                            <Form>
                                <label htmlFor="id">ID</label>
                                <Field id="id" className='form-control' type="text" name="id" placeholder="id"
                                    // {...formik.getFieldProps('id')}
                                    readOnly
                                    disabled
                                />

                                <label htmlFor="name">Name</label>
                                <Field id="name" className='form-control' type="text" name="name" placeholder="name"

                                // {...formik.getFieldProps('id')}      
                                />
                                <label htmlFor="name">Sector</label>
                                <Field id="name" className='form-control' type="text" name="sector" placeholder="sector"
                                // {...formik.getFieldProps('id')}
                                />

                                <div className="mb-5">
                                </div>
                                <button
                                    // disabled={isSubmitting}
                                    type="button"
                                    className="btn bg-theme text-white btn-lg d-block w-100 fw-500 mb-3"
                                    onClick={deleteUserHandler}
                                >
                                    Delete User
                                </button>
                                <button
                                    // disabled={isSubmitting}
                                    type="submit"
                                    className="btn bg-theme text-white btn-lg d-block w-100 fw-500 mb-3"
                                >
                                    Update User
                                </button>
                                <button
                                    type="button"
                                    className="btn bg-theme text-white btn-lg d-block w-100 fw-500 mb-3"
                                    onClick={() => {
                                        toast.info("HISTORY");
                                        navigate("/people/history");
                                    }}

                                // disabled={isSubmitting}
                                >
                                    History
                                </button>
                            </Form>)}
                    </Formik>
                </div>
            </div >
        </div >
    )
}

export default PeopleUserDetails