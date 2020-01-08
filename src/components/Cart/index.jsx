import React, { PureComponent } from 'react'
import "./style.less"

export default class extends PureComponent {
    render() {
        const {
            title = "test",
            headImg = "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=289446672,1693173871&fm=26&gp=0.jpg",
            content = "content",
            typeImg = "type",
            imgurl = "imgurl",
            addInfo = "addInfo",
            http = "test",
            createTime = "createTime",
            endTime = "endTime",
            save = "save",
            cod = "cod"
        } = this.props

        console.log(save);
        

        return (
            <div className="cart-cpt">
                <div className="save">{save}</div>
                {
                    title != "" && (
                        <>
                            <div className="head-title">
                                <div className="head-img">
                                    <img src={imgurl} alt="" />
                                </div>
                                <div className="title">
                                    <h3>{title}</h3>
                                </div>
                            </div>
                            <div className="text-info">
                                {addInfo}
                            </div>
                        </>
                    )
                }
                <div className="pic-box">
                    {
                        <img src={imgurl} />
                    }
                    <div className="pic-mack">
                        <div className="pic-alt">{typeImg}</div>
                        <div className="pic-alt">{cod}</div>
                    </div>
                </div>
                <div className="content">
                    <div className='content_text'>
                        {
                            content
                        }
                    </div>
                    <div className="timer">
                        {createTime} - {endTime}
                    </div>
                </div>
                <div className="http-fot">
                    <div className="http">
                        {
                            <a href='#'>
                                {http}
                            </a>
                        }
                    </div>
                    <div className="move">
                        Leam More
                    </div>
                </div>
            </div>
        )
    }
}