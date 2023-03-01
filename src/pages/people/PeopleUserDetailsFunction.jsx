import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form } from 'formik';
import { useUserDetails } from '../../hooks/usePeople';
import { dateFormat } from '../../utils/utils';

const PeopleUserDetailsFunction = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: userDetail
    } = useUserDetails(id);
    return (
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
            <div className='col-lg-8 col-xl-7 col-xxl-5' >
                <Form>
                    <div className='d-flex align-items-center mb-3'>
                        <a className="btn btn-default" onClick={() => navigate("/people")}>
                            <i className="fa fa-chevron-left fa-fw ms-n1"></i>
                            Back
                        </a>
                        <div className="ms-auto">
                            <button type="submit" className="btn bg-theme text-white">
                                Save changes
                            </button>
                        </div>
                    </div>
                    <hr />
                    {/* HISTORY */}
                    {/* <div className="d-flex align-items-center alert alert-warning">
                            Showing history record! Updated by Joe Rowling, Aug 24th 2023. 13:01
                            <div className="spinner-grow text-warning spinner-grow-sm ms-auto" role="alert"></div>
                        </div> */}

                    {/* <UserForm /> */}
                    <div className="form-group form-control-sm mb-3">
                        <label className="form-label" htmlFor="id">ID</label>
                        <input type="" className="form-control bg-gray-400" id="id" placeholder="ID" readOnly disabled />
                    </div>
                    <div className="form-group form-control-sm mb-3">
                        <label className="form-label" htmlFor="personFullName">Full name</label>
                        <input type="" className="form-control" id="personFullName" placeholder="Full name" />
                    </div>
                    <div className="form-group form-control-sm mb-3">
                        <label className="form-label" htmlFor="sector">Sector</label>
                        <input type="" className="form-control" id="sector" placeholder="Sector" />
                    </div>
                    <hr />
                </Form>
            </div>
        </Formik>
    )
}

export default PeopleUserDetailsFunction


