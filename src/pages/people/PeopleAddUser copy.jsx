import React from 'react'

const PeopleAddUser = () => {
    return (
        <div id="app" className="app app-full-height app-without-header">

            <div className="login">
                <div className="login-content">
                    <form action="index.html" method="POST" name="login_form">
                        <h1 className="text-center">Add User</h1>
                        <div className="text-muted text-center mb-4">
                            For your protection, please verify your identity.
                        </div>


                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input
                                type="text"
                                className="form-control form-control-lg fs-15px"
                                // value=""
                                placeholder="username@address.com"
                            />
                        </div>

                        <div className="mb-3">
                            <div className="d-flex">
                                <label className="form-label">Password</label>
                                <a href="#" className="ms-auto text-muted">Forgot password?</a>
                            </div>
                            <input
                                type="password"
                                className="form-control form-control-lg fs-15px"
                                // value=""
                                placeholder="Enter your password" />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    // value=""
                                    id="customCheck1"
                                />
                                <label className="form-check-label fw-500" for="customCheck1"
                                >Remember me</label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-lg d-block w-100 fw-500 mb-3">
                            Sign In
                        </button>
                        <div className="text-center text-muted">
                            Don't have an account yet? <a href="page_register.html">Sign up</a>.
                        </div>
                    </form>
                </div>
            </div>
        </div>)
}

































export default PeopleAddUser