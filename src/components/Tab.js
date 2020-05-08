import React, {useState} from "react";

const Tab = (props) => {
    const [tab, setTab] = useState("");
    const [tabs, setTabs] = useState([]);


    return props.tabs.map((item, index) => {
        return <button onClick = { onClickHandler }> {item} </button>
    });
}
