import { Link } from "gatsby"
import * as React from "react"
import { Badge, Button, ListGroup } from 'react-bootstrap'
import Header from '../components/header'


const VideoStyle = {
    width: '45vw',
    height: '27vw',
}

const IndexPage = () => {
    const pageStyles = {
        color: "#232129",
        padding: "96px",
        fontFamily: "-apple-system, Roboto, sans-serif, serif",
    }

    return <div>
        <Header />
        <div style={pageStyles}>
                <div style={{display: "grid", gridTemplateColumns: '50% auto', columnGap: 20}} >
                    <Intro />
                    <iframe src="//player.bilibili.com/player.html?bvid=BV1aa411F7Y2&page=1" 
                        style={VideoStyle} scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
                </div>
        </div>
        <hr style={{color: 'black', height: 4}} />
        <Feedback />
    </div>
}

const Intro = () => {
    return <div>
        <title>AnimeBoard</title>
        <h2>
            动画黑板
        </h2>
            是一个知识类视频制作工具。画面编辑类似PPT/Keynote的使用方式。总体使用门槛也差不多，
            可以快速做出一个直观漂亮的可视化动画视频。
        <br />
        <div style={{margin: '10px 0px'}} >
            <Button variant='success' href='https://anime-board.oss-cn-beijing.aliyuncs.com/download/anime-board Setup 0.3.2.exe'>
                下载(win64)
            </Button>{' '}
            <Button variant='info' as={Link} to='/tutorial/quick-started' >快速入门</Button>
        </div>
        <Button size='sm' variant='secondary' as={Link} to='#feedback' >
            反馈
        </Button>
        <Badge>目前只支持win64。</Badge>
        <br /><br />
        <Examples />
        <br />
    </div>
}

const Examples = () => {
    return <div>
        <h4>例子:</h4>
        <a href='http://anime-board.oss-cn-beijing.aliyuncs.com/%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%8C%BA%E5%88%AB.zip'
            target="_blank" >
            进程和线程的区别
        </a>
        （下载压缩包，解压后即可导入）
        <br />
        发布的视频(<a href='https://www.ixigua.com/i6926416351611322891/' >西瓜视频</a>
        , <a href='https://www.bilibili.com/video/BV1Wr4y1P7Yr/' >B站</a>)
    </div>
}

function Feedback() {
    return <div style={{display: 'flex', justifyContent: 'center'}} >
        <div>
        <h3 style={{textAlign: 'center'}} ><a id="feedback" >欢迎任何反馈意见</a></h3>
        <ListGroup style={{width: '30vw'}} >
            <ListGroup.Item>软件交流QQ群: 620823259</ListGroup.Item>
            <ListGroup.Item>邮箱：carsondb@qq.com</ListGroup.Item>
            <ListGroup.Item><a href="https://github.com/carsonDB/animeBoard/issues" >Github issue</a></ListGroup.Item>
            <ListGroup.Item><a href="https://gitee.com/carsonDB/animeBoard/issues" >Gitee issue</a></ListGroup.Item>
        </ListGroup>
        </div>
    </div>
}

export default IndexPage
