import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'


const StyledSidebar = styled.div`
    grid-area: sidebar;
    width: 20vw;
`
export default function Sidebar() {
    const { t } = useTranslation()

    return <StyledSidebar>
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar" >
            <Nav.Item>
                <Nav.Link as={Link} to="/tutorial/quick-started">{t('quickStarted')}</Nav.Link>
                <Nav.Link as={Link} to="/tutorial/write-narration">{t('writeNarration')}</Nav.Link>
                <Nav.Link as={Link} to="/tutorial/elements-keyword">{t('elementKeyword')}</Nav.Link>
                <Nav.Link as={Link} to="/tutorial/monitor-edit">{t('monitorEdit')}</Nav.Link>
                <Nav.Link as={Link} to="/tutorial/make-animation">{t('makeAnimate')}</Nav.Link>
                <Nav.Link as={Link} to="/tutorial/record-and-align">{t('recordAlign')}</Nav.Link>
            </Nav.Item>
        </Nav>
    </StyledSidebar>
}