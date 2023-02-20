import React from 'react'

const PeopleAddUser = () => {
    return (
        // create a form to add a new user
        <div>
            <h1>Add User</h1>
            <form>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />


                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" />

                <label htmlFor="website">Website</label>


                <input type="text" name="website" id="website" />
            </form>
        </div>

































    )
}

export default PeopleAddUser