import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export interface NavLink {
    name:string;
}

export const navLinks:NavLink[] = [
    {name:'Home'}, 
    {name:'About'}, 
    {name:'Projects'},
];

interface LinkProps {
    icon: React.ElementType;
    url: string;
}

export const Link: React.FC<LinkProps> = ({ icon: Icon, url }) => {
    const handleClick = () => {
        window.open(url, '_blank');
    };

    return (
        <button onClick={handleClick}>
            <Icon />
        </button>
    );
};

export interface Profile {
    intro: string;
    experience: string[];
    skills: string[];
    education: string;
    links: LinkProps[];
}

export const brandonProfile:Profile = {
    intro: "Hi. I like to ate, ate, eat aaples and bananays",
    experience: ["1 year. School of hard-knocks"],
    skills: ["Bo staff skillz. Nunchuck skillz"],
    education: "OSU 2021-2023. GPA 3.9",
    links: [
        { icon: FaGithub, url: 'github.com' }
    ],
}

export const davidProfile:Profile = {
    intro: "Buisness Ops --> SWE",
    experience: ["SWE Intern @ Optum (UnitedHealth Group)"],
    skills: ["Full-Stack Development", "Agile Practices", "Leadership & Communication"],
    education: "Oregon State University: BS - Computer Science, Graduation 2023",
    links: [
        { icon: FaGithub, url: 'https://github.com/davidclaphan' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/david-claphan' }
    ]
}