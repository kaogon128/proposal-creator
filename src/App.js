import { useState } from "react";
import style from "./css/toppage.module.css"
import CommandCreator from "./components/utils/CommandCreator";
import FlowCreator from "./components/utils/FlowCreator";
import SideBarCreator from "./components/utils/SideBarCreator";
import ContentCreator from "./components/utils/ContentCreator";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import Complete from "./components/Complete";

function App() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState({ time: { value: 0, config: false }, content: "" });
  const [flow, setFlow] = useState([]);
  const [command, setCommand] = useState([]);
  const [sideBar, setSideBar] = useState({ title: "", lines: [], explanation: ""});
  const [other, setOther] = useState("");

  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showFlow, setShowFlow] = useState(false);
  const [showCommand, setShowCommand] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const [showComplete, setShowComplete] = useState(false);


  return (
    <div className="App">
      <h1>企画書め～か～</h1>
      <div className={style.TopField}>
        <div onClick={() => setShowTitle(!showTitle)} className={style.PulDownMenu}>
          {showTitle ? <GoTriangleDown/>: <GoTriangleRight/> } タイトルを編集する
        </div>
        <div className={style.TitleField} style={{ display: showTitle ? "block" : "none" }}>
          <input type="text" placeholder="タイトルを入力してください" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div onClick={() => setShowContent(!showContent)} className={style.PulDownMenu}>
        {showContent ? <GoTriangleDown/>: <GoTriangleRight/> } ゲーム内容を編集する
        </div>
        <div className={style.Content} style={{ display: showContent ? "block" : "none" }}>
          <ContentCreator content={content} setContent={setContent} />
        </div>
        <div onClick={() => setShowFlow(!showFlow)} className={style.PulDownMenu}>
        {showFlow ? <GoTriangleDown/>: <GoTriangleRight/> } ゲームの流れを編集する
        </div>
        <div className={style.Flow} style={{ display: showFlow ? "block" : "none" }}>
          <FlowCreator flow={flow} setFlow={setFlow} />
        </div>
        <div onClick={() => setShowCommand(!showCommand)} className={style.PulDownMenu}>
        {showCommand ? <GoTriangleDown/>: <GoTriangleRight/> } コマンドを編集する
        </div>
        <div className={style.Command} style={{ display: showCommand ? "block" : "none" }}>
          <CommandCreator command={command} setCommand={setCommand} />
        </div>
        <div onClick={() => setShowSideBar(!showSideBar)} className={style.PulDownMenu}>
        {showSideBar ? <GoTriangleDown/>: <GoTriangleRight/> } サイドバーを編集する
        </div>
        <div className={style.SideBar} style={{ display: showSideBar ? "block" : "none" }}>
          <SideBarCreator sideBar={sideBar} setSideBar={setSideBar} />
        </div>
        <div onClick={() => setShowOther(!showOther)} className={style.PulDownMenu}>
        {showOther ? <GoTriangleDown/>: <GoTriangleRight/> } その他要望を編集する
        </div>
        <div className={style.Other} style={{ display: showOther ? "block" : "none" }}>
          <textarea name="" placeholder="要望を入力してください" id="" onChange={(e) => setOther(e.target.value)}></textarea>
        </div>
        <div className={style.CreateField} onClick={() => setShowComplete(!showComplete)}>
          作成する
        </div>
        <div style={{ display: showComplete ? "block" : "none" }}>
          <Complete title={title} content={content} flow={flow} command={command} sideBar={sideBar} other={other} show={showComplete} set={setShowComplete} />
        </div>
      </div>

    </div>
  );
}

export default App;
