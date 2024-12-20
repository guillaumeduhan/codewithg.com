'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import me from '../../public/me.jpg';

const Main = () => {
  const names = ["Guillaume Duhan", "Codewithguillaume"];
  const roles = ["Chief Technical Officer", "Content Creator", "Father"];
  const [currentName, setCurrentName] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentName((prevIndex) => (prevIndex + 1) % names.length);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsFading(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div>
      <header className="text-left grid gap-4 mt-4">
        <Image className="size-24 rounded-full border-4 dark:border-neutral-800 overflow-hidden" src={me} alt="me" />
        <div>
          <h1 className="text-[24px] italic font-[500]">{names[currentName]}</h1>
          <p
            className={`font-[100] text-sm transition-all duration-500 transform ${isFading ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'
              }`}
          >
            {roles[currentRoleIndex]}
          </p>
        </div>
      </header>
    </div>
  );
};

export default Main;
