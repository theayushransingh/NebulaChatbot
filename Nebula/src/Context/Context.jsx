import { createContext, useState } from "react";
import runChat from "../Components/Chatpage/Config/Gemini"


export const Context = createContext();

const ContextProvider = (props) => {

    const [input, SetInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, Setloading] = useState(false);
    const [resultData, SetresultData] = useState("");

    const delay = (index, nextWord) => {
        setTimeout(() => {
            SetresultData(prev => prev + nextWord);
        }, 75 * index)
    }


    const onSent = async () => {
        SetresultData("");
        Setloading(true);
        setShowResult(true)
        setRecentPrompt(input);
        const response = await runChat(input);
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];

            } else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        let newResponse2 = newResponse.split("*").join("<br/>");
        let newResponeArray = newResponse2.split(" ");
        for (let i = 0; i < newResponeArray.length; i++) {
            const nextWord = newResponeArray[i];
            delay(i, nextWord + " ");
        }
        Setloading(false);
        SetInput("");
    }

    const ContextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        loading,
        resultData,
        input,
        SetInput,
        showResult
    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}





export default ContextProvider;
