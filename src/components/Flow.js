import React from 'react'
import style from "../css/table.module.css"
const Flow = ({ flow }) => {
    return (
        <div>
            <table id='flow' className={style.FlowTable}>
                <tbody>
                    <tr><th colSpan={2}>ゲームの流れ</th></tr>
                    {flow.map((data, index) => (
                        <tr key={index}>
                            <td className={style.Number}>{index + 1}.</td>
                            <td>{data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Flow
