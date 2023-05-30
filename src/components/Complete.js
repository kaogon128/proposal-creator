import React, { useEffect, useRef } from 'react'
import jsPDF from 'jspdf'
import style from "../css/toppage.module.css";
import "./utils/ipaexg-normal";
import Content from './Content';
import Flow from './Flow';
import Commands from './Commands';
import SideBar from './SideBar';
import Other from './Other';

const Complete = ({ title, content, flow, command, sideBar, other, show, set }) => {

    const pdfRef = useRef(new jsPDF())

    const savePdf = () => {
        const target = document.querySelector('#pdf');

        pdfRef.current.html(target, {
            callback(doc) {

                const fileName = "complete.pdf";
                doc.save(fileName);

            },
            x: 5,
            y: 0,
            width: window.innerWidth < 480 ? 200 : 250,
            windowWidth: window.innerWidth < 480 ? 650 : 1300
        });

    }

    useEffect(() => {

        pdfRef.current.setFont('ipaexg');

    }, []);

    return (
        <div className={style.Complete} style={{ display: show ? "block" : "none" }}>
            <div onClick={() => savePdf()} className={style.Download}>PDFをダウンロード</div>
            <div className={style.Close} onClick={() => set(!show)}>×</div>
            <div id='pdf' style={{fontFamily: "ipaexg"}}>
                <div className={style.CompleteTitle}><h1>{title}</h1></div>
                <Content content={content} />
                <Flow flow={flow} />
                <Commands commnads={command} />
                <SideBar sideBar={sideBar} />
                <Other other={other}/>
            </div>
        </div>
    )
}

export default Complete
