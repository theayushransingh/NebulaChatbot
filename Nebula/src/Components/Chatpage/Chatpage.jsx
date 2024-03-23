import React, { useState } from 'react'
import userimg from "../Chatpage/Assets/user.png"
import "./Chatpage.css"
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import loadingLogo from '../Chatpage/Assets/loadingLogo3.png'

function Chatpage() {


    const { onSent, recentPrompt, showResult, loading, resultData, SetInput, input } = useContext(Context)

    const [userName, SetUserName] = useState("Dev")
    const [extended, setExtended] = useState(false);
    return (
        <div className='Chatpage'>
            <aside className='Asidemenu'>
                <div className="top">
                    <div className="menu">
                        <i className="ri-menu-line" onClick={() => setExtended(prev => !prev)}></i>
                    </div>
                    <div className="newchat">
                        <i className="ri-add-large-line"></i>
                        {extended ? <p>New chat</p> : null}
                    </div>
                    {extended ?

                        <div className="recent">
                            <p className="recentTitle">
                                Recent
                            </p>
                            <div className="recentEntry">
                                <i className="ri-chat-4-line"></i>
                                <p>React is The...</p>
                            </div>
                        </div>
                        : null
                    }

                </div>
            </aside>

            <main className='Main'>
                <div className="logoSection">
                    <p>Nebula</p>
                    <img src={userimg} alt="" />
                </div>
                <div className="mainContainer">
                    {!showResult ?
                        <>
                            <div className="greet">
                                <p> <span className='username'>Hello,{userName}</span></p>
                                <p>How can I assist you today?</p>
                            </div>
                            <div className="chat-cards">
                                <div className="chat-card">
                                    <p> What would the world be like if animals could talk</p>
                                    <i class="ri-brain-line"></i>
                                </div>
                                <div className="chat-card">
                                    <p>How do I make a reservation?</p>
                                    <i class="ri-calendar-2-line"></i>
                                </div>
                                <div className="chat-card">
                                    <p>Can you provide more details about Programming</p>
                                    <i class="ri-code-line"></i>
                                </div>
                                <div className="chat-card">
                                    <p>I need to learn a new skill for work. What online resources would you recommend?</p>
                                    <i class="ri-graduation-cap-line"></i>
                                </div>
                            </div>

                        </>
                        : <div className="result">
                            <div className="resultTitle">
                                <img src={userimg} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="resultdata">

                                {loading ?
                                    <>
                                        <img className='loadingImg' src={loadingLogo} alt="" />
                                        <div className='loader'>
                                            <hr />
                                            <hr />
                                            <hr />
                                        </div>
                                    </>
                                    :
                                    <>
                                        <img className='loadingImg none' src={loadingLogo} alt="" />
                                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                    </>
                                }
                            </div>

                        </div>
                    }
                    <div className="chatButton">
                        <div className="SearchBox">
                            <input
                                onChange={(e) => SetInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault(); // Prevent form submission or other default behavior
                                        onSent();
                                    }
                                }}
                                type="text"
                                placeholder='Message Nebula'
                                value={input}
                            />
                            <i
                                onClick={() => onSent()}
                                className="ri-send-plane-2-line"
                            ></i>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Chatpage
