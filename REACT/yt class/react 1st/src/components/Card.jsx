import React from 'react'
import { User, Ellipsis, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

const Card = (props) => {

    return (
    <div className='container'>
      <div className='card'>
        <div className="head">
          <div className="user">
            <div className="avatar-placeholder">
              <User size={24} color="#555" />
            </div>
            <h4>{props.user}</h4>
          </div>
          <div className="btns">
            <button>Follow</button>
            <Ellipsis size={24} color="#000" />
          </div>
        </div>

        <div className="main">
          <img src={props.img} alt="Post" />
        </div>

        <div className="mainNav">
          <div className="f1">
            <Heart size={28} color="#000" strokeWidth={1.5} />
            <MessageCircle size={28} color="#000" strokeWidth={1.5} />
            <Send size={28} color="#000" strokeWidth={1.5} />
          </div>
          <div className="s2">
            <Bookmark size={28} color="#000" strokeWidth={1.5} />
          </div>
        </div>

        <div className="bottam">
          <div className="likes">
            <p><strong>{props.like} likes</strong></p>
          </div>
          <div className="title">
            <p><strong>{props.user}</strong> {props.cap}</p>
            <p className="hashtags">{props.tag}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card