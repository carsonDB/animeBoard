import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Header from '../components/header'
import Sidebar from '../components/sidebar'

const StyledContainer = styled.div`
    display: grid;
    grid-template-areas:
        'header header header header header header'
        'sidebar main main main main right'
        'sidebar footer footer footer footer footer';
    grid-gap: 10px;
`
const StyledContent = styled.div`
    grid-area: main;
    width: 80%;
    img {
        margin: 30px 0px;
        display: block;
        max-width: 100%;
    }
    h1 {
        font-size: 3rem;
        font-weight: 600;
        margin-top: 1em;
    }
    h2 {
        font-size: 1.4rem;
        font-weight: 600;
        margin-top: 1em;
    }
    h3 {
        font-size: 1rem;
        font-weight: 600;
    }
`

export default function Template({ data }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return <StyledContainer>
        <Header />
        <Sidebar />
        <StyledContent>
            <h1>{frontmatter.title}</h1>
            <div style={{marginTop: '4em'}} dangerouslySetInnerHTML={{ __html: html }}/>
        </StyledContent>
    </StyledContainer>
}


export const pageQuery = graphql`
    query($slug: String!, $language: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug }, lang: { eq: $language } }) {
            html
            frontmatter {
                slug
                title
                lang
            }
        }
        locales: allLocale(filter: {language: {eq: $language}}) {
            edges {
              node {
                ns
                data
                language
              }
            }
          }
    }
`
