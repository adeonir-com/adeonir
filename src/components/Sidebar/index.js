import React from "react"

import Profile from "../Profile"
import Menu from "../Menu"
import Social from "../Social"

import * as S from "./styles"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <Menu />
    <Social />
  </S.SidebarWrapper>
)

export default Sidebar
