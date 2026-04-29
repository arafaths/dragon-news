export const getCategory = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/news/categories',
  );
  const data = await res.json();
  return data.data.news_category;
};

export const getNewsByCategoryId = async categories_id => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categories_id}`,
  );
  const data = await res.json();
  return data.data;
};

export const getNews = async news_id => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
  );
  const data = await res.json();
  return data.data[0];
};


