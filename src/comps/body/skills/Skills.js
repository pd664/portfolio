import React from 'react'
import '../../../static/comps/body/skill/skills.css'
import SkillCard from './SkillCard'
import JsImg from '../../../pictures/PixCut-removebg.png'
import ReactImg from '../../../pictures/PixCut-removebg (1).png'
import ReduxImg from '../../../pictures/PixCut-removebg (2).png'
// import ExpressImg from '../../../pictures/'
import MongoImg from '../../../pictures/download.png'
import AwsChimeImg from '../../../pictures/download (1).png'
import DSAImg from '../../../pictures/download (2).png'
import AWSImg from '../../../pictures/download (3).png'
import NodeImg from '../../../pictures/download (4).png'
import S3Img from '../../../pictures/download (5).png'

const skills_lang = [
    {
        skillName: 'Javascript',
        skillLogo: JsImg,
        ratings : 3
    },
    {
        skillName: 'React.js',
        skillLogo: ReactImg,
        ratings : 7
    },
    {
        skillName: 'Redux',
        skillLogo: ReduxImg,
        ratings : 3
    },
    {
        skillName: 'Node.js',
        skillLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8sAV8cCfWa2R7szjJ3P8TEWEoXDvUU9dCg&usqp=CAU',
        ratings : 3
    },
    {
        skillName: 'Express',
        skillLogo: 'https://initialcommit.com/img/initialcommit/beginners-guide-to-using-express-js-and-node-js-framework.png',
        ratings : 2
    },
    {
        skillName: 'Bootstrap',
        skillLogo: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
        ratings : 5
    },
    {
        skillName: 'MySql',
        skillLogo: 'https://pngimg.com/d/mysql_PNG23.png',
        ratings : 3
    },
    {
        skillName: 'MongoDb',
        skillLogo: MongoImg,
        ratings : 4
    },
    {
        skillName: 'Mongoose',
        skillLogo: 'https://avatars.githubusercontent.com/u/7552965?s=280&v=4',
        ratings : 3
    },
    {
        skillName: 'DSA',
        skillLogo: DSAImg,
        ratings : 4
    },
    {
        skillName: 'AWS',
        skillLogo: AWSImg,
        ratings : 4
    },
    {
        skillName: 'S3',
        skillLogo: S3Img,
        ratings : 3
    },
    {
        skillName: 'Chime',
        skillLogo: AwsChimeImg,
        ratings : 6
    },
    {
        skillName: 'Git',
        skillLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
        ratings : 2
    },
    {
        skillName: 'Linux',
        skillLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
        ratings : 3
    }
]

function Skills() {
    return (
        <div className='skills py-5'>
            <div className='all_skills'>
                <p className='my_skills text-light text-center'>My Skills</p>
                <div className='skills_cont d-flex justify-content-center flex-wrap'>
                    {skills_lang.map((skill, key) => {
                        return (
                            <div className='p-5' key={key}>
                                <SkillCard skill_img={skill.skillLogo} skill_name={skill.skillName} ratings={skill.ratings} />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Skills
