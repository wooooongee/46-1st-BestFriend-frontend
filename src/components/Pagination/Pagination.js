import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { LIST_LIMIT } from '../../constants';
import './Pagination.scss';

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.set('limit', LIST_LIMIT);
  const movePage = pageNum => {
    searchParams.set('offset', (pageNum - 1) * LIST_LIMIT);
    setSearchParams(searchParams);
  };

  return (
    <div className="pagination">
      <hr className="page-divider" />
      <div className="page">
        {PAGE.map(({ id }) => {
          return (
            <button className="page-btn" key={id} onClick={() => movePage(id)}>
              {id}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;

const PAGE = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
];
