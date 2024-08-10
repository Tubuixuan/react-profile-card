import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

//Tạo một mảng chứa thông tin đầy đủ các kỹ năng (phần 2 - dùng phương thức map())
const skills = [
  { skill: "HTML + CSS", emoji: "🦋", color: "#fb8500" },
  { skill: "Javascript", emoji: "🛏", color: "#ffb703" },
  { skill: "Nodejs", emoji: "💠", color: "#023047" },
  { skill: "RESTful API", emoji: "🦀", color: "#219ebc" },
  { skill: "MongoDB", emoji: "🦃", color: "#8ecae6" },
];

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

// Cách cũ truyền một prop thôi
// function Skill(props) {
//   return (
//     <div className="skill" style={{ backgroundColor: props.color }}>
//       <span>{props.skill}</span>
//       <span>{props.emoji}</span>
//     </div>
//   );
// }

//Cách cũ truyền trực tiếp nội dung vào trong
// function SkillList() {
//   return (
//     <div className="skill-list">
//       <Skill skill="React" emoji="🐅" color="red" />
//       <Skill skill="HTML, CSS" emoji="🐛" color="yellow" />
//       <Skill skill="Nodejs" emoji="🐌" color="green" />
//       <Skill skill="RESTful API" emoji="🐬" color="gray" />
//       <Skill skill="Testing software" emoji="🐙" color="orange" />
//     </div>
//   );
// }

//Cách mới truyền nhiều props và sử dụng phương thức .map()
function Skill({ skill, color, emoji }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

//Cách mới sử dụng phương thức .map()
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} emoji={skill.emoji} />
      ))}
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
