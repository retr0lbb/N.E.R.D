import React from "react";
import ProfileBanner from "../components/ProfileBanner"
import {styled} from "../components/index"
import NavBar from "../components/shared/navBar";
export default function ProfileScreen(){
    return (
        <styled.ProfileMainWrapper>
            <NavBar></NavBar>
            <ProfileBanner></ProfileBanner>
        </styled.ProfileMainWrapper>
    )
}
