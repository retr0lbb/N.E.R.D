import React from "react";
import ProfileBanner from "../components/ProfileBanner"
import {styled} from "../components/index"
import NavBar from "../components/shared/navBar";
import HeaderM from "../components/shared/Header"


export default function ProfileScreen(){
    return (
        <styled.ProfileMainWrapper>
            <HeaderM></HeaderM>
            <NavBar></NavBar>
            <ProfileBanner></ProfileBanner>
        </styled.ProfileMainWrapper>
    )
}
