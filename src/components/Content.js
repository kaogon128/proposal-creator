import React from 'react'
import style from "../css/table.module.css"

const Content = ({ content }) => {
    return (
        <table id='content' className={style.Content}>
            <tbody>
                <tr><th colSpan={2}>ゲーム内容</th></tr>
                <tr>
                    <td>ゲーム時間</td>
                    <td>
                        {content.time.value === 0 ? "指定なし" : content.time.value + " 分"}
                        {content.time.config ? " ※ Configにて指定可能" : ""}
                    </td>
                </tr>
                <tr>
                    <td>推奨プレイ人数</td>
                    <td>
                        {content.num === 0 ? "指定なし" : content.num + " 人"}
                    </td>
                </tr>
                <tr>
                    <td>内容</td>
                    <td className={style.ContentField}>{content.content}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Content
