import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { dateFormat, capitalizeFirstLetter } from '../../../utils/utils';
import UserForm from '../components/UserForm';
import { basicSchema } from "../../../schemas"

const PeopleHistoryDetails = ({ historyRecord }) => {
    const navigate = useNavigate();
    const formikInitialValues = {
        id: historyRecord?.entityId || '',
        name: historyRecord?.name || '',
        sector: historyRecord?.sector || '',
        changedAt: dateFormat(historyRecord?.changedAt) || ""
    }
    return (
        <>
            <Formik
                initialValues={formikInitialValues}
                enableReinitialize={true}
                validationSchema={basicSchema}
            >
                <div className='col-lg-8 col-xl-7 col-xxl-5' >
                    <Form autoComplete='off'>
                        <div className='d-flex align-items-center mb-3'>
                            <a className="btn btn-default" onClick={() => navigate("/people")}>
                                <i className="fa fa-chevron-left fa-fw ms-n1"></i>
                                Back
                            </a>
                        </div>
                        <hr />


                        {/* HISTORY */}
                        <div className="d-flex align-items-center alert alert-warning">
                            Showing history record! {capitalizeFirstLetter(historyRecord.itemState)} by Franko Stipanov, {dateFormat(historyRecord.changedAt)}
                            <div className="spinner-grow text-warning spinner-grow-sm ms-auto" role="alert"></div>
                        </div>

                        <UserForm className="bg-gray-100 text-black" label="ID" type="number" name="id" placeholder="id" disabled={true} readOnly={true} />

                        <UserForm label="Full Name" type="text" name="name" placeholder="Full Name" disabled={true} readOnly={true} />

                        <UserForm label="Sector" type="text" name="sector" placeholder="Sector" disabled={true} readOnly={true} />
                        <hr />
                    </Form>
                </div>
            </Formik >
        </>
    )
}

export default PeopleHistoryDetails


