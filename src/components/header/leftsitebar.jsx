import Link from 'next/link';
import React from 'react';

const LeftSiteBar = ({ categoriesData, activeId}) => {
  return (
    <div>
      <p className="text-gray-800 text-xl font-semibold mb-4">All Category</p>
      <ul className="">
        {categoriesData.map(cg => {
          return (
            <li
              key={cg.category_id}
              className={`text-lg font-medium ${activeId === cg.category_id && 'bg-gray-200 rounded-lg font-semibold text-gray-500'}`}
            >
              <Link
                href={`/category/${cg.category_id}`}
                className="block pl-12 py-3"
              >
                {' '}
                {cg.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSiteBar;