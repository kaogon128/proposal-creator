import React from 'react'
import style from "../css/table.module.css"

const Commands = ({commnads}) => {
  return (
    <table id='commands' className={style.CommandTable}>
        <tbody>
            <tr><th colSpan={2}>コマンド</th></tr>
            {commnads.map((data, index)=>(
                <tr key={index}>
                    <td>{data.command}</td>
                    <td>{data.desc}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Commands
