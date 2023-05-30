import React from 'react'
import style from "../../css/toppage.module.css"

const ContentCreator = ({ content, setContent }) => {

    function setGameTime(e) {
        setContent({
            time: { value: e.target.value, config: content.time.config },
            content: content.content
        })
    }

    function changeConfig() {
        setContent({
            time: { value: content.time.value, config: !content.time.config },
            content: content.content
        })
    }

    function changeContent(e) {
        setContent({
            time: { value: content.time.value, config: content.time.config },
            content: e.target.value
        })
    }

    return (
        <div className={style.ContentField}>
            <div>
                <label>ゲーム時間 : </label>
                <input type="number" value={content.time.value} onChange={(e)=> setGameTime(e)}/> 分
            </div>
            <div>
                <label>コンフィグで指定可能 : </label>
                <input type="checkbox" onClick={() => changeConfig()} />
            </div>
            <textarea name="" id="" placeholder='ゲーム内容を入力してください' onChange={(e) => changeContent(e)} />
        </div>
    )
}

export default ContentCreator
