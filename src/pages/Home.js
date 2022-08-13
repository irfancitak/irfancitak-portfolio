import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Link from "@material-ui/core/Link";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is İrfan</h2>
        <p className="prompt-p">
          A Frontend Developer with a passion for learning and creating.
        </p>

        <div className="prompt">

          <Link className="icons_design" href="https://www.linkedin.com/in/irfan-%C3%A7%C4%B1tak-4440b7209/" target="_blank">
            <LinkedInIcon />
          </Link>

          <Link className="icons_design" href="https://twitter.com/irfanncitakk" target="_blank">
            <TwitterIcon />
          </Link>

          <Link className="icons_design" href="https://github.com/irfancitak" target="_blank">
            <GithubIcon />
          </Link>

        </div>

      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML,CSS,ReactJs,TailwindCSS,Bootstrap,Firebase</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
