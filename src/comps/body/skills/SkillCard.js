import React from 'react'
import '../../../static/comps/body/skill/skillCard.css'

function SkillCard(props) {
  const { skill_img, skill_name, ratings } = props

  return (
    <div className='skillCard'>
      <div className='card'>
        <div className='card-side front'>
          <div className='skillCard_cont'>
            <div className='imgBox'>
              <img src={skill_img} className='skill_img' />
            </div>
            <div className="contntBox">
              <h4 className='skill_name'>{skill_name}</h4>
            </div>
          </div>
        </div>
        <div className='card-side back'>
          <div className='imgBox'>
            <img src={skill_img} className='skill_img' />
          </div>
          <div className="contntBox">
              <h4 className='skill_name'>{skill_name}</h4>
            </div>         
        </div>
      </div>
    </div>
  )
}

export default SkillCard