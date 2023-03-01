import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form } from 'formik';
import { useUserDetails, useUpdateUser, useRemoveUser } from '../../hooks/usePeople';
import { dateFormat } from '../../utils/utils';
import { toast } from 'react-toastify'
import UserForm from './components/UserForm';
import { basicSchema } from "../../schemas/"

const PeopleUserDetailsFunction = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: userDetail
    } = useUserDetails(id);

    const { mutateAsync: updateUser } = useUpdateUser(id);
    const { mutateAsync: removeUser } = useRemoveUser(id);
    const deleteUserHandler = () => {
        removeUser();
        toast.error("User is deleted!");
        setTimeout(() => {
            navigate("/people");
        }, 1000);
    }
    return (
        <Formik
            initialValues={{
                id: userDetail?.id || '',
                name: userDetail?.name || '',
                sector: userDetail?.sector || '',
                changedAt: dateFormat(userDetail?.changedAt) || ""
            }}
            enableReinitialize={true}
            validationSchema={basicSchema}

            onSubmit={(values) => {
                if (userDetail.name !== "" && userDetail.sector !== "" && userDetail.name !== values.name || userDetail.sector !== values.sector) {
                    const newData = {
                        ...userDetail,
                        "name": values.name || userDetail?.name,
                        "sector": values.sector || userDetail?.sector
                    }
                    toast.info("User successfully updated!");
                    updateUser(newData)
                }
            }
            }
        >
            <div className='col-lg-8 col-xl-7 col-xxl-5' >
                <Form autoComplete='off'>
                    <div className='d-flex align-items-center mb-3'>
                        <a className="btn btn-default" onClick={() => navigate("/people")}>
                            <i className="fa fa-chevron-left fa-fw ms-n1"></i>
                            Back
                        </a>
                        <div className="ms-auto">
                            <button type="button" className="btn bg-theme text-white me-2" onClick={deleteUserHandler}>
                                Delete
                            </button>
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

                    <UserForm className="bg-gray-500" label="ID" type="number" name="id" placeholder="id" disabled readOnly />

                    <UserForm label="Full Name" type="text" name="name" placeholder="Full Name" />

                    <UserForm label="Sector" type="text" name="sector" placeholder="Sector" />
                    <hr />
                </Form>
            </div>
        </Formik >
    )
}

export default PeopleUserDetailsFunction


