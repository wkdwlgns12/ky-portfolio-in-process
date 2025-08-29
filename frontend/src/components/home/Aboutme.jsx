import React from 'react'
import "./styles/Aboutme.scss"
import aboutMe from '../../utils/aboutme'
const Aboutme = () => {
  const profile = aboutMe.basic
  const skills = aboutMe.skills
  const exper = aboutMe.experiences
  const interests = aboutMe.interests
  return (
    <div className='inner aboutme-inner'>
      <h1 className="tit">
        <span className="star-spin"><i className="star">✱</i></span>
        aboutMe
      </h1>
      <div className="t-wrap">
        <h2 className="sub-tit">
          profile
        </h2>
        <p className="txt">
          들어가는 최종 요소나 사용된다. <br />
          레이아웃 들어가는 로렘 부르며,
          <br /> 들어가는 최종 전에 프로젝트 사용할 사용된다.
        </p>
      </div>

      <div className="about-container">
        <div className="in-wrap">
          <h4 className='list-lst'>list-tit</h4>
          <ul className="lst">
            <li>
              <strong>이름</strong>: {profile.name}
            </li>
            <li>
              <strong>나이</strong>: {profile.name}
            </li>
            <li>
              <strong>사는곳</strong>: {profile.name}
            </li>
            <li>
              <strong>MBTI</strong>: {profile.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aboutme