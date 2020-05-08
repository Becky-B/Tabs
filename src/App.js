import React, { useState } from 'react';
import './App.css';
import TabDisplay  from "./components/TabDisplay";
import Tab from "./components/Tab";
// import "./components/Tabs.module.css";

function App(){
  const [content, setContent] = useState("");
  const Tabs = [
    {
      label : "Tab 1",
      content : "Tab 1 content shows here"
    },
    {
      label : "Tab 2",
      content : "Tab 2 content shows here"
    },
    {
      label : "Tab 3",
      content : "Tab 3 content shows here"
    }
  ]


  return (
    <div className="App">
      <Tab tabs= {Tabs} setContent = {setContent}/>
      <TabDisplay content = {content}/>
    </div>
  );
}


export default App;
