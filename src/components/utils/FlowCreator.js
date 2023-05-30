import React from 'react'
import style from "../../css/toppage.module.css"
import { GoDiffAdded, GoDiffRemoved } from "react-icons/go";

const FlowCreator = ({ flow, setFlow }) => {

    function addFlow() {
        setFlow([...flow, ""])
    }

    function changeFlow(e, i) {
        setFlow(
            flow.map((data, index) => index === i ? e.target.value : data)
        )
    }

    function deleteFlow(i) {
        setFlow(
            flow.filter((data, index) => index !== i)
        )
    }

    return (
        <div className={style.FlowField}>
            <div onClick={() => addFlow()} className={style.AddRemoveBotton}>
                <GoDiffAdded/> ラインを追加する
            </div>
            {
                flow.map((data, index) => (
                    <div key={index}>
                        <input type="text" placeholder='ゲームの流れを入力してください' value={data.command} onChange={(e) => changeFlow(e, index)} />
                        <span onClick={() => deleteFlow(index)} className={style.AddRemoveBotton}> <GoDiffRemoved/></span>
                    </div>
                ))
            }
        </div>
    )
}

export default FlowCreator

