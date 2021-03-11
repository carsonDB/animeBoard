import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import styled from 'styled-components'


const StyledSidebar = styled.div`
    grid-area: sidebar;
    width: 20vw;
`
export default function Sidebar() {

    return <StyledSidebar>
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar" >
            <Nav.Item>
                <Nav.Link as={Link} to="/tutorial/write-narration">写文稿</Nav.Link>
                <Nav.Link as={Link} to="/tutorial/elements-keyword">元素与关键词</Nav.Link>
                <Nav.Link as={Link} to="/tutorial/make-animation">制作动画</Nav.Link>
                <Nav.Link as={Link} to="/tutorial/record-and-align">录音与对齐</Nav.Link>
            </Nav.Item>
        </Nav>
    </StyledSidebar>
}