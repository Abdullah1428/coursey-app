import React, { useEffect, useState } from 'react'
import RegisterView from '../views/RegisterView'

const RegisterPresenter = (props) => {
    const [userProfileDetails, setuserProfileDetails] = useState({})
    

    return (
        <RegisterView />
    );

}


export default RegisterPresenter
