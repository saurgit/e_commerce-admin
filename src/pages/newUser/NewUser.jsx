import React from 'react'
import './newUser.css'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'


function NewUser() {
    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />

                <div className='newUser'>
                    <h1 className="newUserTitle">
                        New User
                    </h1>
                    <form className='newUserForm'>
                        <div className="newUserFormItem">
                            <label>
                                Username
                            </label>
                            <input type="text" placeholder='john' />
                        </div>
                        <div className="newUserFormItem">
                            <label>
                                Full Name
                            </label>
                            <input type="text" placeholder='john doe' />
                        </div>
                        <div className="newUserFormItem">
                            <label>
                                Email
                            </label>
                            <input type="email" placeholder='john@gmail.com' />
                        </div>
                        <div className="newUserFormItem">
                            <label>
                                password
                            </label>
                            <input type="password" placeholder='john' />
                        </div>
                        <div className="newUserFormItem">
                            <label>
                                Contact No.
                            </label>
                            <input type="text" placeholder='+91 9876543210' />
                        </div>
                        <div className="newUserFormItem">
                            <label>
                                Address
                            </label>
                            <input type="text" placeholder='brahmaPutra Hostel Patna' />
                        </div>
                        <div className="newUserFormItem">

                            <label>
                                Gender
                            </label>
                            <div className="newUserGender">
                                <div className='genderLabel'>

                                    <input type="radio" name='gender' id='male' value="Male" />
                                    <label htmlFor='male'>
                                        Male
                                    </label>
                                </div>
                                <div className='genderLabel'>

                                    <input type="radio" name='gender' id='female' value="Female" />
                                    <label htmlFor='female'>
                                        Female
                                    </label>
                                </div>
                                <div className='genderLabel'>
                                    <input type="radio" name='gender' id='other' value="other" />
                                    <label htmlFor='other'>
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="newUserFormItem">
                            <label>Active</label>
                            <select className='newUserSelect' name='active' id='active'>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <button className='newUserButton'>
                                CREATE
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default NewUser