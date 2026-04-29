import LeftSiteBar from '@/components/header/leftsitebar';
import NewsCard from '@/components/header/newscard';
import RightSiteBar from '@/components/header/rightsitebar';
import { getCategory, getNewsByCategoryId } from '@/lib/data';
import React from 'react';

const CategoryIdPage = async ({ params }) => {
  const { id } = await params;

  const categoriesData = await getCategory();
  const newsCategories = await getNewsByCategoryId(id);

  return (
    <div className="grid grid-cols-4 gap-6 container mx-auto px-5 mt-4">
      {/* left site bar */}
      <div className="col-span-1">
        <LeftSiteBar categoriesData={categoriesData} activeId={id} />
      </div>

      {/* news bar */}
      <div className="col-span-2">
        <p className="text-gray-800 text-xl font-semibold mb-4">
          Dragon News Home
        </p>
        <div className="space-y-2">
          {newsCategories.length === 0 ? (
            <p className='text-center mt-25 text-2xl text-gray-800 font-semibold'>No News Found</p>
          ) : (
            newsCategories.map(news => {
              return (
                <NewsCard key={news._id} news={news}>
                  
                </NewsCard>
              );
            })
          )}
        </div>
      </div>

      {/* right site bar */}
      <div className="col-span-1">
        <RightSiteBar />
      </div>
    </div>
  );
};

export default CategoryIdPage;
