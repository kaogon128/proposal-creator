import React from 'react'
import style from "../css/table.module.css"

const Other = ({other}) => {
  return (
    <table id='other' className={style.OtherTable}>
    <tbody>
        <tr><th>その他要望</th></tr>
        <tr>
            <td className={style.OtherContent}>
                {other}
            </td>
        </tr>
    </tbody>
</table>
  )
}

export default Other
