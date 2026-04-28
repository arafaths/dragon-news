import React from 'react';
import Marquee from 'react-fast-marquee';

const BreackingNews = () => {
  const breackingTitle = [
    {
      id: 1,
      title: 'Global Tech Market Sees Rapid Growth in 2026',
    },
    {
      id: 2,
      title: 'AI Revolution Changes Future of Web Development',
    },
    {
      id: 3,
      title: 'Stock Market Hits Record High',
    },
    {
      id: 4,
      title: 'New Climate Policy Announced at Global Summit',
    },
    {
      id: 5,
      title: 'Startups in Asia Attract Massive Investments',
    },
    {
      id: 6,
      title: 'Cybersecurity Becomes Top Priority for Companies',
    },
    {
      id: 7,
      title: 'Electric Vehicles Sales Break All Records',
    },
  ];

  return (
    <div className="container mx-auto mt-2">
      <div className="flex gap-3 p-2 bg-gray-200 mx-5">
        <button className="py-1 px-4 rounded-none bg-red-400 text-white font-semibold">
          Latest
        </button>
        <Marquee pauseOnHover={true}>
          {breackingTitle.map(title => {
            return (
              <span key={title.id} className="mr-10 font-semibold">
                {title.title}
              </span>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default BreackingNews;