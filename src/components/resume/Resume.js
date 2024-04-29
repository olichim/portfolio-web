// import React, {  useState } from 'react'
// import Title from '../layouts/Title';
// import Education from './Education';
import Skills from './Skills';


const Resume = () => {
  //  const [skillData, setSkillData] = useState(false);
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        
          <li
            className="border-designColor rounded-lg border-transparent"
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {<Skills />}
 
    </section>
  );
}

export default Resume