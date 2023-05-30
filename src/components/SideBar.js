import React from 'react'
import style from "../css/table.module.css"

const SideBar = ({sideBar}) => {
  return (
    <table id='sidebar' className={style.SideBar}>
        <tbody>
            <tr><th colSpan={2}>サイドバー</th></tr>
            <tr><th colSpan={2} className={style.Title}>{sideBar.title === "" ? "サイドバータイトル" : sideBar.title}</th></tr>
            {sideBar.lines.map((data, index)=>(
                <tr key={index}>
                    <td colSpan={2}>{data}</td>
                </tr>
            ))}
            <tr>
              <td style={{width: "10%"}}>補足</td>
              <td style={{whiteSpace:"pre-wrap"}}>{sideBar.explanation}</td>
            </tr>
        </tbody>
    </table>
  )
}

export default SideBar
