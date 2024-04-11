import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Link from '@material-ui/core/Link';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Zaid</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link href="https://www.linkedin.com/in/zaid-ahmed-967439230/" target="_blank" >
          <LinkedInIcon />
          </Link>
          <Link href="mailto:zaid.42005@gmail.com" target="_blank" >
          <EmailIcon />
          </Link>
          <Link href="https://github.com/zaid42005" target="_blank" >
          <GithubIcon />
          </Link>
          
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, NextJS, HTML, CSS, React Native, NPM,
              JavaScript, MaterialUI, Yarn, TailwindCSS, Vercel
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java, PostgreSQL, Python, Flask,
              MySQL, MongoDB, RapidAPI
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, Rust</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
