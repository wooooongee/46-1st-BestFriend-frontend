import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './Category.scss';

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectMainCategory = main => {
    searchParams.delete('subCategoryId');
    main.forEach(element => {
      searchParams.append('subCategoryId', element);
    });
    setSearchParams(searchParams);
  };

  const selectSubcategory = sub => {
    searchParams.set('subCategoryId', sub);
    setSearchParams(searchParams);
  };

  const mainCategory = () => {
    const subCategories = searchParams.getAll('subCategoryId');
    let result = {};
    if (subCategories.every(item => parseInt(item) <= 4)) {
      result = CATEGORIES.plants;
    }
    if (
      subCategories.every(item => parseInt(item) >= 5 && parseInt(item) <= 7)
    ) {
      result = CATEGORIES.pots;
    }
    if (subCategories.every(item => parseInt(item) >= 8)) {
      result = CATEGORIES.tools;
    }
    return result;
  };

  return (
    <div className="category">
      <h1
        className="main-category"
        onClick={() => selectMainCategory(mainCategory().id)}
      >
        {mainCategory().title}
      </h1>
      <ul className="subcategories">
        <li
          className="sub-all"
          onClick={() => selectMainCategory(mainCategory().id)}
        >
          전체보기
        </li>
        {mainCategory().subCategories.map(({ id, title }) => {
          return (
            <li
              className="subcategory"
              key={id}
              onClick={() => selectSubcategory(id)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;

export const CATEGORIES = {
  plants: {
    id: [1, 2, 3, 4],
    title: '식물',
    path: '/list?subCategoryId=1&subCategoryId=2&subCategoryId=3&subCategoryId=4',
    subCategories: [
      { id: 1, title: '초보자도 키우기 쉬워요' },
      { id: 2, title: '선물하기 좋아요' },
      { id: 3, title: '공기를 정화해줘요' },
      { id: 4, title: '어두운 곳에서도 잘 자라요' },
    ],
  },
  pots: {
    id: [5, 6, 7],
    title: '화분',
    path: '/list?subCategoryId=5&subCategoryId=6&subCategoryId=7',
    subCategories: [
      { id: 5, title: '도자기 화분' },
      { id: 6, title: '토분' },
      { id: 7, title: '유약분' },
    ],
  },
  tools: {
    id: [8, 9, 10],
    title: '관리상품',
    path: '/list?subCategoryId=8&subCategoryId=9&subCategoryId=10',
    subCategories: [
      { id: 8, title: '스프레이' },
      { id: 9, title: '물뿌리개' },
      { id: 10, title: '모종삽' },
    ],
  },
};
