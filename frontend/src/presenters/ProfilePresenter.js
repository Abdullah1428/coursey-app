import React, { useEffect, useState } from 'react'
import ProfileView from '../views/ProfileView'
import Loader from '../components/Loader'

const ProfilePresenter = (props) => {
    const [userProfileDetails, setuserProfileDetails] = useState({})

    useEffect(()=>{
        setuserProfileDetails(props.profileModel.getProfileDetails())

    
    },[]
    )
    return (
        <ProfileView profileModel = {userProfileDetails}/>
    );


}


export default ProfilePresenter
