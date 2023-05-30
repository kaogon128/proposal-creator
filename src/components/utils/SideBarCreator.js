import React from 'react'
import style from "../../css/toppage.module.css"
import { GoDiffAdded, GoDiffRemoved } from "react-icons/go";

const SideBarCreator = ({ sideBar, setSideBar }) => {

    function setTitle(e) {
        setSideBar({
            title: e.target.value,
            lines: sideBar.lines,
            explanation: sideBar.explanation
        })
    }

    function changeExplanation(e){
        setSideBar({
            title: sideBar.title,
            lines: sideBar.lines,
            explanation: e.target.value
        })
    }

    function addLines() {
        setSideBar({
            title: sideBar.title,
            lines: [...sideBar.lines, ""],
            explanation: sideBar.explanation
        })
    }

    function changeLine(e, i) {
        setSideBar({
            title: sideBar.title,
            lines: sideBar.lines.map((data, index) => index === i ? e.target.value : data),
            explanation: sideBar.explanation
        })
    }

    function deleteLine(i) {
        setSideBar({
            title: sideBar.title,
            lines: sideBar.lines.filter((data, index) => index !== i),
            explanation: sideBar.explanation
        })
    }

    return (
        <div className={style.SideBarField}>
            <div>
                <input type="text" placeholder='サイドバーのタイトルを入力してください' value={sideBar.title} onChange={(e) => setTitle(e)} />
            </div>
            <div onClick={() => addLines()} className={style.AddRemoveBotton} style={{padding: "10px"}}>
                <GoDiffAdded/> ラインを追加する
            </div>
            {
                sideBar.lines.map((data, index) => (
                    <div key={index}>
                        <input type="text" placeholder='ラインを入力してください' value={data} onChange={(e) => changeLine(e, index)} />
                        <span onClick={() => deleteLine(index)} className={style.AddRemoveBotton}> <GoDiffRemoved /></span>
                    </div>
                ))
            }
            <div>
                <textarea name="" id="" placeholder="捕捉等がある場合は入力してください" onChange={(e)=>changeExplanation(e)}></textarea>
            </div>
        </div>
    )
}

export default SideBarCreator
