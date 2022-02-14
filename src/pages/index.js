import { graphql } from "gatsby"
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import React, { useState } from "react"
import { Badge, Button, ListGroup, Modal } from 'react-bootstrap'
import { Helmet } from "react-helmet"
import Header from '../components/header'


const VideoStyle = {
    width: '30vw',
    height: '18vw',
}
const pageStyles = {
    color: "#232129",
    padding: "10vw",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

export default function IndexPage() {
    const { t } = useTranslation()

    return <div>
        <SEO title={t('AnimeBoard')} />
        <Header />
        <div style={pageStyles}>
            <div style={{display: "grid", gridTemplateColumns: '50% auto', columnGap: 50}} >
                <Intro />
                <IntroVideo />
            </div>
        </div>
        <hr style={{color: 'black', height: 1}} />
        <Feedback />
    </div>
}

const bilibiliVideo = "//player.bilibili.com/player.html?bvid=BV1aa411F7Y2&page=2"
const youtubeVideo = "https://www.youtube.com/embed/D4Fj_fieS5w"
const IntroVideo = () => {
    const { language: lang } = useI18next()
    const src = lang === 'zh' ? bilibiliVideo : youtubeVideo

    return <iframe src={src} 
        style={VideoStyle} 
        scrolling="no" 
        border="0" 
        frameBorder="no" 
        framespacing="0" 
        allowFullScreen={true} />
}

const version = `0.4.3`
const Intro = () => {
    const [downloadPrompt, setDownloadPrompt] = useState(false)
    const { language: lang } = useI18next()
    const { t } = useTranslation()
    const downloadUrl = `https://anime-board.oss-cn-beijing.aliyuncs.com/download/anime-board Setup ${version}.exe`

    return <div>
        <h2>
            {t('AnimeBoard')}{' '}
            <Badge bg='secondary' style={{fontSize: '.5em'}} >{`v${version} (${t('beta')})`}</Badge>
        </h2>
            {t('appIntro')}
        <br />
        <div style={{margin: '10px 0px'}} >
            <Button variant='success' onClick={() => setTimeout(() => setDownloadPrompt(true), 3000)} href={downloadUrl}>
                {t('download')}(win64)
            </Button>{' '}
            {downloadPrompt && lang === 'zh' && <DownloadPrompt onCancel={() => setDownloadPrompt(false)} />}
            <Button variant='info' as={Link} to='/tutorial/quick-started' >{t('quickStarted')}</Button>{' '}
            <Button size='sm' variant='secondary' as={Link} to='#feedback' >
                {t('feedback')}
            </Button>
        </div>
        <div>{t('onlyWin64')}</div>
        <br /><br />
        {lang === 'zh' && <Examples />}
        <br />
    </div>
}

const Examples = () => {
    return <div>
        <h4>例子:</h4>
        <a href='http://anime-board.oss-cn-beijing.aliyuncs.com/%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%8C%BA%E5%88%AB.zip' >
            进程和线程的区别
        </a>
        （下载压缩包，解压后即可导入）
        <br />
        发布的视频(<a href='https://www.ixigua.com/i6926416351611322891/' >西瓜视频</a>
        , <a href='https://www.bilibili.com/video/BV1Wr4y1P7Yr/' >B站</a>)
    </div>
}

function Feedback() {
    const { t } = useTranslation()
    const { language: lang } = useI18next()

    return <div style={{display: 'flex', justifyContent: 'center', margin: '30px'}} >
        <div>
        <h3 style={{textAlign: 'center'}} ><a id="feedback" >{t("welcomeFeedback")}</a></h3>
        <ListGroup style={{width: '30vw'}} >
            <ListGroup.Item>{lang === 'zh' ? t('community') : <a href='https://join.slack.com/t/animeboard/shared_invite/zt-yz7ugr8z-7Npooh1PthbAAQdrEbxg~A'>Slack</a>}</ListGroup.Item>
            <ListGroup.Item>{t('email')}：carsondb@qq.com</ListGroup.Item>
            <ListGroup.Item><a href="https://github.com/carsonDB/animeBoard/issues" >Github issue</a></ListGroup.Item>
            <ListGroup.Item><a href="https://gitee.com/carsonDB/animeBoard/issues" >Gitee issue</a></ListGroup.Item>
        </ListGroup>
        </div>
    </div>
}

function DownloadPrompt(props) {
    const { t } = useTranslation()

    return <Modal show={true} onHide={props.onCancel}>
        <Modal.Header closeButton>
        <Modal.Title>下载安装遇到问题？</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            请点击<a href={'https://www.bilibili.com/video/BV1aa411F7Y2?p=2&share_source=copy_web'} >
                测试版安装教程</a>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>
            {t('close')}
        </Button>
        </Modal.Footer>
    </Modal>
}

function SEO({title}) {
    
    return <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
}

export const query = graphql`
  query($language: String!) {
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
`;