import React, {useState, useEffect} from 'react';
import { Profile, Link } from '../constants/data';
import '../styles/modalProfile.css';

interface ModalProfile {
    bio: Profile;
    isExpanded: boolean;
}

export const ModalProfile:React.FC<ModalProfile> = ({bio, isExpanded}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if(isExpanded) {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 1000);

        return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isExpanded])

    return (
        <div className={`modal-bio ${isVisible ? 'fade' : ''}`}>
            <h2>About</h2>
            <p>{bio.intro}</p>
            <h2>Experience</h2>
            {bio.experience.map((experience, index) => (
                <ul key={index}> {experience} </ul>
            ))}
            <h2>Skills</h2>
            {bio.skills.map((skill, index) => (
                <ul key={index}> {skill} </ul>
            ))}
            <h2>Education</h2>
            <p>{bio.education}</p>
            <h2>Links</h2>
            {bio.links.map((link, index) => (
                <Link key={index} icon={link.icon} url={link.url}/>
            ))}
        </div>
    )
}