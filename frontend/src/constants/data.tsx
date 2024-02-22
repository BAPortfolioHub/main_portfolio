export interface NavLink {
    name:string;
}

export const navLinks:NavLink[] = [
    {name:'Home'}, 
    {name:'About'}, 
    {name:'Projects'},
];

export interface Profile {
    intro: string;
    experience: string;
    skills: string;
    education: string;
    links: string;
}

export const brandonProfile:Profile = {
    intro: "Hi. I like to ate, ate, eat aaples and bananays",
    experience: "1 year. School of hard-knocks",
    skills: "Bo staff skillz. Nunchuck skillz",
    education: "OSU 2021-2023. GPA 3.9",
    links: "www.google.com",
}

export const davidProfile:Profile = {
    intro: "Buisness Ops --> SWE",
    experience: "SWE Intern @ Optum (UnitedHealth Group) | 8 Years in Business Ops, Analytics, and Process Efficiency",
    skills: "Full-Stack Development | Python | Agile Practices | Leadership | Communication",
    education: "Oregon State University: BS - Computer Science, Graduation 2023",
    links: "https://www.linkedin.com/in/david-claphan",
}