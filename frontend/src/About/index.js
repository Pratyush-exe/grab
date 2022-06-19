import React from 'react';
import { AiFillGithub, AiFillCode } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaUniversity } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { TeamData } from './teamData';

const Card = ({
  name,
  imgUrl,
  prof,
  loc,
  college,
  github,
  linkedin,
}) => {
  return (
    <div className="bg-primary rounded-2xl mx-auto max-w-xs mb-8  border-4 border-black">
      <img className="rounded-t-xl" src={imgUrl} alt="Profile" />

      <div className="py-2 px-4 flex justify-between items-center border-b-2 border-black">
        <h2 className="font-semibold text-lg">{name}</h2>

        <div className="flex items-center text-xl">
          <a className="pr-2" href={github}>
            <AiFillGithub />
          </a>
          <a href={linkedin}>
            <BsLinkedin />
          </a>
        </div>
      </div>

      <ul className="py-2 px-4">
        <li className="flex justify-start items-center">
          <AiFillCode className="mr-2" /> {prof}
        </li>
        <li className="flex justify-start items-center">
          <MdLocationOn className="mr-2" /> {loc}
        </li>
        <li className="flex justify-start items-center">
          <FaUniversity className="mr-2" /> {college}
        </li>
      </ul>
    </div>
  );
};

function About() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="p-4 font-bold text-xl mt-28">Our Team</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TeamData.map(
          ({
            key,
            name,
            imgUrl,
            prof,
            loc,
            college,
            github,
            linkedin,
          }) => (
            <Card
              key={key}
              imgUrl={imgUrl}
              name={name}
              prof={prof}
              loc={loc}
              college={college}
              github={github}
              linkedin={linkedin}
            />
          )
        )}
      </div>
    </div>
  );
}

export default About;
