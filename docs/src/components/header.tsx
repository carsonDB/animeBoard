import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar, Modal, Button } from 'react-bootstrap'
import { Link } from 'gatsby'

const StyledHeader = styled.div`
    grid-area: header;
`

export default function Header() {
    const [price, setPrice] = useState(false);

    return <StyledHeader>
        <Navbar bg="dark" variant="dark"  >
            <Navbar.Brand as={Link} to="/">主页</Navbar.Brand>
            <Navbar.Brand as={Link} to="/tutorial/quick-started">快速入门</Navbar.Brand>
            <Navbar.Brand as={Link} to="/tutorial/document-list">详细文档</Navbar.Brand>
            <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => setPrice(true)} >价格</Navbar.Brand>
        </Navbar>

        <Modal show={price} onHide={() => setPrice(false)}>
            <Modal.Header closeButton>
            <Modal.Title>价格</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{color: 'red'}} >现在，软件属于测试阶段，不会收费，没有限制。</div>
                未来从正式版开始，会有免费版、付费版的尝试。
                目前的原则是，如果您只是偶尔用一下，做个视频，免费使用。如果您每月周期性制作多个视频,
                或者，需要对视频质量（如：分辨率）有更高的追求时，需购买付费。
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setPrice(false)}>
                关闭
            </Button>
            </Modal.Footer>
        </Modal>
    </StyledHeader>
}
