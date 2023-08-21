import React from 'react'
import '../../../static/comps/body/experience/experience.css'

const data = [
    {
        year: 2022,
        post: 'Software Engineering Intern',
        location : 'Noida, Delhi NCR',
        desc: 'Joined GeeksForGeeks as a Frontend (React) Intern in the Software Engineering team. Joined the Technical Writing team, helping build better tools for the Technical Writing team, later switched teams to build Frontend for GFG Practice platform.'
    },
    {
        year: 2017,
        post: 'MEP Engineer',
        location : 'Panipat, Haryana',
        desc: 'Worked as a MEP Engg. and supervised all mechanical and electrical work along with a dedicated team of engineers.'
    },
    {
        year: 2016,
        post: 'Electrical Engineer',
        location : 'Dehradun, Uttarakhand',
        desc: 'Worked as an Electrical Engineer and supervised more than 3 residential towers with Mivan shuttering.'
    },
    {
        year: 2015,
        post: 'Electrical Engineer',
        location : 'Gurugram, Delhi NCR',
        desc: 'Started working as a Trainee Electrical Engineer, Quickly raising to the ranks of Senior Electrical Engineer.'
    },
]

function Experience() {
  return (
    <div className='experience container'>
        <h1 className='text-center p-3'>Experiences</h1>
        <div className=''>
            {data.map((item, key) => {
                return (
                    <div className='exp_cont d-flex justify-content-center py-3' key={key}>
                        <div className='exp_year'><span className='exp_year_cont text-center'>{item.year}</span></div>
                        <div className='exp_border px-4'></div>
                        <div className='exp_cont px-4'>
                            <h1 className='exp_post'>{item.post}</h1>
                            <h3 className='exp_loc'>{item.location}</h3>
                            <h4 className='exp_desc py-3'>{item.desc}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Experience