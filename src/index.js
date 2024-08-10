import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="nhulac.jpg" alt="Nhu Lac Yeu Dau" />;
}

function Intro() {
  return (
    <div>
      <h1>Như Lạc Yêu Dấu</h1>
      <p>
        Như Lạc Yêu Dấu, Như Lạc Yêu Dấu, Như Lạc Yêu Dấu,Như Lạc Yêu Dấu, Như
        Lạc Yêu Dấu, Như Lạc Yêu Dấu, Như Lạc Yêu Dấu,Như Lạc Yêu Dấu
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🐅" color="red" />
      <Skill skill="HTML, CSS" emoji="🐛" color="yellow" />
      <Skill skill="Nodejs" emoji="🐌" color="green" />
      <Skill skill="RESTful API" emoji="🐬" color="gray" />
      <Skill skill="Testing software" emoji="🐙" color="orange" />
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
