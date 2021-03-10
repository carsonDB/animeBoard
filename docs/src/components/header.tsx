import React from 'react'
import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

const StyledHeader = styled.div`
    grid-area: header;
`

export default function Header() {
    return <StyledHeader>
        <Navbar bg="dark" variant="dark"  >
            <Navbar.Brand href="/">主页</Navbar.Brand>
            <Navbar.Brand href="/tutorial/quick-started">快速入门</Navbar.Brand>
            <Navbar.Brand href="https://github.com/carsonDB/animeBoard">GitHub</Navbar.Brand>
        </Navbar>
    </StyledHeader>
}