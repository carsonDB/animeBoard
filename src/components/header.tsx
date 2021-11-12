import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useState } from 'react';
import { Button, Modal, Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledHeader = styled.div`
    grid-area: header;
`

export default function Header() {
    const [price, setPrice] = useState(false)
    const { t } = useTranslation()
    const {languages, changeLanguage} = useI18next()

    const langMap = {
        zh: '中文',
        en: 'English'
    }

    return <StyledHeader>
        <Navbar bg="dark" variant="dark" style={{textTransform: 'capitalize', paddingLeft: '1em'}} >
            <Navbar.Brand as={Link} to="/">{t('homePage')}</Navbar.Brand>
            <Navbar.Brand as={Link} to="/tutorial/document-list">{t('doc')}</Navbar.Brand>
            <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => setPrice(true)} >{t('price')}</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">{
                languages.map(lang => 
                    <Nav.Item key={lang} >
                        <Nav.Link onClick={() => changeLanguage(lang)} style={{color: 'lightGray'}} >
                            {langMap[lang]}
                        </Nav.Link>
                    </Nav.Item>)
            }</Navbar.Collapse>
        </Navbar>

        <Modal show={price} onHide={() => setPrice(false)}>
            <Modal.Header closeButton>
            <Modal.Title>{t('price')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {t('priceInfo')}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setPrice(false)}>
                {t('close')}
            </Button>
            </Modal.Footer>
        </Modal>
    </StyledHeader>
}
