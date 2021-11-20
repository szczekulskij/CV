import React from 'react'
import { SidebarContainer,Icon, CloseIcon,SidebarWrapper, SidebarLink, SidebarMenu, SideBarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to ='about'>About</SidebarLink>
                    <SidebarLink to ='discover'>Discover</SidebarLink>
                    <SidebarLink to ='services'>Services</SidebarLink>
                    <SidebarLink to ='signup'>Signup</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBarRoute to = '/signin'>Sign in</SideBarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
