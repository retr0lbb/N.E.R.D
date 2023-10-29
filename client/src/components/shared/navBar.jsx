import React from "react";
import {AiFillHome, AiFillFolder, AiFillCustomerService, AiFillMessage} from "react-icons/ai";
import {BsFillMegaphoneFill, BsFillPlusCircleFill} from "react-icons/bs";
import {IoSettingsSharp} from "react-icons/io5";
import * as styled from "./styled";

export default function NavBar(){
    return(
        <styled.NavMainWrapper>
            <styled.NavLinkList>
                <styled.LinkContent>    <styled.ALink href="/home"><AiFillHome size={40} color="#f1faee"/></styled.ALink></styled.LinkContent>
                    <styled.LinkContent>    <styled.ALink href="/"><AiFillFolder size={40} color="#f1faee"/>           </styled.ALink></styled.LinkContent>
                        <styled.LinkContent>    <styled.ALink href="/"><AiFillCustomerService size={40} color="#f1faee"/>  </styled.ALink></styled.LinkContent>
                            <styled.LinkContent>    <styled.ALink href="/"><AiFillMessage size={40} color="#f1faee"/>          </styled.ALink></styled.LinkContent>
                            <styled.LinkContent>    <styled.ALink href="/"><BsFillMegaphoneFill size={40} color="#f1faee"/>    </styled.ALink></styled.LinkContent>
                        <styled.LinkContent>    <styled.ALink href="/"><BsFillPlusCircleFill size={40} color="#f1faee"/>   </styled.ALink></styled.LinkContent>
                    <styled.LinkContent>    <styled.ALink href="/"><IoSettingsSharp size={40} color="#f1faee"/>        </styled.ALink></styled.LinkContent>
            </styled.NavLinkList>
        </styled.NavMainWrapper>
    )
}