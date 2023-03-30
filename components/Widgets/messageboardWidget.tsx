import { MessageCircle, ThumbsUp } from "react-feather"


export const MessageBoardWidget = () => {
    return (
        <div >
            <div className="messages">
                <div className="message-layout">
                    <div className="messages-title">Announcements</div>
                    <div className="messages-content">
                        <div className="box">
                            <div className="layout">
                                <div className="header">
                                    <div className="profile">
                                        <img className="admin-message-profile-image"></img>
                                        <div className="info">
                                            <div className="admin-message-header">Admin 1</div>
                                            <div className="admin-message-context">
                                                <div className="admin-message-context-button">
                                                    <div className="text">today at 7:10 AM</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="socials"></div>
                                </div>
                                <div className="body">
                                    <div className="mint-table-component-address-header">
                                        <h1>Announcement Post Title</h1>
                                        <br></br>
                                        <p>This is an announcement body. We can make this Markdown compatible.</p>
                                    </div>
                                </div>
                                <div><div className="footer">
                                    <div className="message-footer-icons ">
                                        <div className="likes">
                                            <div className="number">15  </div>
                                            <ThumbsUp className="svg-icon"/>
                                        </div>
                                        <div className="likes">

                                            <div className="number">4</div>
                                            <MessageCircle className="svg-icon"/>
                                        </div>
                                    </div>
                                    <div className="message-footer ">
                                        <div className="like-button">
                                            <div className="button">
                                                <div className="claim-button-text">
                                                    <div className="text">
                                                    <ThumbsUp className="svg-icon"/>
                                                    <div className="mint-table-component-address-header">LIKE</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="like-button">
                                        <div className="button">
                                                <div className="claim-button-text">
                                                    <div className="text">
                                                    <MessageCircle className="svg-icon"/>
                                                    <div className="mint-table-component-address-header">COMMENT</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}