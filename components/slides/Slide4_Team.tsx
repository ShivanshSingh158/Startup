
import React, { useState, useEffect } from 'react';
import type { SlideProps, TeamMember } from '../../types';

const teamMembers: TeamMember[] = [
  { name: 'Shivansh Singh', title: 'Creative Mind', background: 'Electrical Eng. Student (2nd year), PEC CHANDIGARH', imageUrl: 'https://picsum.photos/seed/shivansh/100/100' },
  { name: 'Piyush Kumar Yadav', title: 'Team Member', background: 'Electrical Eng. Student (2nd year), PEC CHANDIGARH', imageUrl: 'https://picsum.photos/seed/piyush/100/100' },
  { name: 'Saurabh Kumar', title: 'Team Member', background: 'Electrical Eng. Student (2nd year), PEC CHANDIGARH', imageUrl: 'https://picsum.photos/seed/saurabh/100/100' },
  { name: 'Arjun Popli', title: 'Team Member', background: 'Electrical Eng. Student (2nd year), PEC CHANDIGARH', imageUrl: 'https://picsum.photos/seed/arjun/100/100' },
];

const ProfileCard: React.FC<{ member: TeamMember; isFounder?: boolean; visible: boolean; delay: number }> = ({ member, isFounder = false, visible, delay }) => {
    return (
        <div
            className={`flex items-center gap-6 bg-slate-800/70 p-4 rounded-lg border border-slate-700 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <img src={member.imageUrl} alt={member.name} className={`object-cover rounded-full shadow-lg ${isFounder ? 'w-32 h-32 border-4 border-teal-400' : 'w-20 h-20 border-2 border-slate-500'}`} />
            <div>
                <h3 className={`font-bold ${isFounder ? 'text-3xl text-white' : 'text-xl text-slate-200'}`}>{member.name}</h3>
                <p className={` ${isFounder ? 'text-xl text-teal-400' : 'text-lg text-teal-500'}`}>{member.title}</p>
                <p className="text-slate-400 mt-1">{member.background}</p>
            </div>
        </div>
    );
}

const Slide4_Team: React.FC<SlideProps> = ({ isActive }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => setVisible(true), 100);
            return () => clearTimeout(timer);
        } else {
            setVisible(false);
        }
    }, [isActive]);

    return (
        <div className="w-full h-full flex flex-col justify-center p-12 gap-10">
            <h2 className={`text-4xl font-bold text-teal-300 transition-all duration-700 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>About the Founder & Team</h2>
            
            <div className="w-full max-w-4xl mx-auto">
                <ProfileCard member={teamMembers[0]} isFounder={true} visible={visible} delay={200} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-4">
                {teamMembers.slice(1).map((member, index) => (
                    <ProfileCard key={member.name} member={member} visible={visible} delay={400 + index * 150} />
                ))}
            </div>
        </div>
    );
};

export default Slide4_Team;
