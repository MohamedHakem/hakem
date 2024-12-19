'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function ScrollRevealAnimationCSS() {
  const containerRef = useRef(null);

  const [githubFollower, setGithubFollower] = useState<
    {
      id: number;
      name: string;
      avatar: string;
      randomStar: number;
    }[]
  >([]);

  useEffect(() => {
    const fetchLast20GithubFollowers = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ibelick/followers');
        const data = await response.json();

        const newGithubFollowers = data
          .map((follower: { id: string; login: string; avatar_url: string }) => {
            return {
              id: follower.id,
              name: follower.login,
              avatar: follower.avatar_url,
              randomStar: Math.floor(Math.random() * 90) + 10
            };
          })
          .slice(0, 20);

        setGithubFollower(newGithubFollowers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLast20GithubFollowers();
  }, []);

  return (
    <>
      <div className="h-[500px] w-full overflow-y-scroll pt-4" ref={containerRef}>
        <ul className="flex w-full flex-col space-y-2 pb-[10%]">
          {githubFollower?.map((item) => {
            return (
              <li
                key={item.id}
                className="items flex items-center justify-between rounded-xl bg-[#e0e0e080] bg-opacity-50 px-3 py-2 backdrop-blur-xl dark:bg-primary-dark-5"
              >
                <div className="flex items-center">
                  <Image src={item.avatar} alt="Avatar" className="h-8 w-8 rounded-full" />
                  <span className="ml-2 text-sm text-primary-light-12 dark:text-primary-dark-12">{item.name}</span>
                </div>
                <div className="flex items-end">
                  <Star
                    className="h-4 w-4 text-primary-light-9 dark:text-primary-dark-9"
                    fill="#FDCC0D"
                    color="#FDCC0D"
                  />
                  <span className="ml-1 text-xs text-primary-light-11 dark:text-primary-dark-11">
                    {/* {item.randomStar} */}
                    5/5
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>{`
        @keyframes appear {
          from {
            filter: blur(6px);
            scale: 0.8;
          }
          to {
            opacity: 1;
            filter: blur(0);
            scale: 1;
          }
        }

        .items {
          animation: appear linear both;
          animation-timeline: view();
          animation-range: entry cover 15%;
        }
      `}</style>
    </>
  );
}
