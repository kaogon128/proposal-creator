import React from 'react'
import style from "../../css/toppage.module.css"
import { GoDiffAdded, GoDiffRemoved } from "react-icons/go";

const CommandCreator = ({ command, setCommand }) => {

    function addCommand() {
        setCommand([...command, {
            command: "",
            desc: ""
        }])
    }

    function changeCommand(e, i) {
        setCommand(
            command.map((data, index) => index === i ? {
                command: e.target.value,
                desc: data.desc
            } : data)
        )
    }


    function changeDesc(e, i) {
        setCommand(
            command.map((data, index) => index === i ? {
                command: data.command,
                desc: e.target.value
            } : data)
        )
    }

    function deleteCommand(i) {
        setCommand(
            command.filter((data, index) => index !== i)
        )
    }

    return (
        <div className={style.CommandField}>
            <div onClick={() => addCommand()} className={style.AddRemoveBotton}>
                <GoDiffAdded/> コマンドを追加する
            </div>
            {
                command.map((data, index) => (
                    <div key={index}>
                        <input style={{width:"25%"}} type="text" placeholder='コマンドを入力してください' value={data.command} onChange={(e) => changeCommand(e, index)} />
                        <input type="text" placeholder='コマンドの説明を入力してください' value={data.desc} onChange={(e) => changeDesc(e, index)} />
                        <span onClick={() => deleteCommand(index)} className={style.AddRemoveBotton}> <GoDiffRemoved/></span>
                    </div>
                ))
            }
        </div>
    )
}

export default CommandCreator

