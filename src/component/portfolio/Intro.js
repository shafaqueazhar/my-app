import React from 'react';
import guyCoding from "../portfolio/Images/cover.jpg";
import profileImage from "../portfolio/Images/girl.jfif";
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import { WhatsAppOutlined } from "@ant-design/icons";
import { LinkedinFilled, GithubFilled, FacebookFilled } from "@ant-design/icons"
import "./styles/Intro.css";

function Intro() {

    const getIntroCard = () => {
        return (
            <section className="portfolio-intro-card-wrapper">
                <section className="portfolio-intro-card-bg-image">
                    <img src={guyCoding} />
                </section>
                <section className="portfolio-intro-card-content-wrapper">
                    <img src={profileImage}/>
                    <h2>Shafaque Azhar</h2>
                    <p>Currently i am pursuing B-Tech from lovely professional University in CSE. My goal is to work in a reputed Company which will help me to explore myself fully and realize my potential. To work in an environment that provides a positive atmosphere for learning new technologies and implementing them for the betterment of the organisation along with enhancing my knowledge.</p>
                    <div>Resume</div>
                    <section className="portfolio-intro-card-social-wrapper">
                        <LinkedinFilled onClick={()=>window.open("https://github.com/","_blank")}/>
                        <GithubFilled />
                        <FacebookFilled />
                    </section>
                </section>
            </section>
        )
    }

    const getIntroVideo = () => {
        let playerWidth = window.innerWidth > 60 ? "600px" : "100vw";
       
        return <ReactPlayer width={playerWidth} height="500px" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        
    }

    const getIntroBody = () =>{
        return (
            <section className="portfolio-intro-body-wrapper">
                {getIntroCard()}
                {getIntroVideo()}
            </section>
        )
    }

  return (
  <div className="portfolio-intro-wrapper">
        <h1>Introduction</h1>
        {getIntroBody()}
        <div className="connect-whatsapp" onClick={()=>{window.open("https://wa.me/7004813287?text=Hello Harshal, I want to talk to you regarding an opening in my company.")}}>
            <WhatsAppOutlined style={{color:"#fff", fontSize:"30px"}}/>
        </div>
  </div>
  )
}

export default Intro;