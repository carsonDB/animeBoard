import React from 'react'
import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'
import { Link } from 'gatsby'

const StyledHeader = styled.div`
    grid-area: header;
`

export default function Header() {
    return <StyledHeader>
        <Navbar bg="dark" variant="dark"  >
            <Navbar.Brand as={Link} to="/">主页</Navbar.Brand>
            <Navbar.Brand as={Link} to="/tutorial/quick-started">快速入门</Navbar.Brand>
            <Navbar.Brand as={Link} to="/tutorial/document-list">详细文档</Navbar.Brand>
            <Navbar.Brand href="https://github.com/carsonDB/animeBoard">GitHub</Navbar.Brand>
            <Navbar.Brand href="https://gitee.com/carsonDB/animeBoard">Gitee</Navbar.Brand>
        </Navbar>
    </StyledHeader>
}