import React from "react"
import "./style.scss";

const MAX_POINT = 7;
const SkillPoint = ({isCheck = false}) => {
    return <div className={`skill-point ${isCheck ? "check" : ""}`}></div>
}

const Skill = ({name = '', point = 7}) => {
    return <div className="skill-item">
        <div className="skill-name">{name}</div>
        <div className="point-div">
            {(new Array(MAX_POINT)).fill('').map((item, index) => {
                return <SkillPoint key={index} isCheck={index + 1 <= point}/>
            })}
        </div>
    </div>
}


export default Skill;
