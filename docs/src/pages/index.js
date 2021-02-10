import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const ButtonStyle = {
  margin: 5
}

// markup
const IndexPage = () => {
  return <main style={pageStyles}>
      <title>AnimeBoard</title>
      <h3>
        动画黑板
      </h3>
        是一个知识类视频制作工具。只需要类似PPT/Keynote的使用门槛和操作方式，
        就可以快速做出一个直观漂亮的可视化动画视频。
      <br />
      <div style={{padding: 10, display: 'flex', alignItems: 'center'}} >
          <Button style={ButtonStyle} variant='success' href='./animeBoard-win64.exe'>下载(win64)</Button>
          <Button style={ButtonStyle} variant='info' 
            href='https://github.com/carsonDB/animeBoard#animeboard' target="_blank">快速入门</Button>
        目前只支持win64。
      </div>
  </main>
}

export default IndexPage
