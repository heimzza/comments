import React from 'react'

const Comment = ({name, timeAgo, star, avatar}) => {
    // const {name, timeAgo, star} = props;
    return (
        <div>
            <div>
                <div className="ui comments">
                    <div className="comment">
                        <a className="avatar">
                            <img alt='' src={avatar} />
                        </a>
                        <div className="content">
                            <a className="author">{name}</a>
                            <div className="metadata">
                                <span className="date">{timeAgo - 1} days ago</span>
                            </div>
                            <div className="text">
                                <p>This has been very useful for my research. Thanks as well!</p>
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment;