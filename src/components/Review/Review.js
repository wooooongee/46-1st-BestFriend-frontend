import React, { useEffect, useState } from 'react';
import './Review.scss';
import { APIS } from '../../config';

const Review = ({ productsId, token }) => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const [reviewText, setReviewText] = useState('');

  const handleText = e => {
    setReviewText(e.target.value);
  };

  // Review GET
  const getReview = () => {
    fetch(`${APIS.reviews}/${productsId}`)
      .then(res => res.json())
      .then(data => {
        setReviewList(data.Review);
      });
  };

  // Review POST
  const handleReviewPost = e => {
    if (e.key === 'Enter' && reviewText !== '') {
      fetch(`${APIS.reviews}/${productsId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
        body: JSON.stringify({
          product_id: productsId,
          comment: reviewText,
        }),
      })
        .then(res => res.json())
        .then(data => {
          getReview();
          setReviewText('');
        });
    } else return;
  };

  // Review DELETE
  const handleReviewDelete = id => {
    if (!window.confirm('댓글을 삭제하시겠습니까?')) return;
    fetch(`${APIS.reviews}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    }).then(res => {
      if (res.ok) {
        getReview();
      }
      throw new Error('에러 발생');
    });
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <div className="review">
      <hr className="divider top" />
      <div className="section-title">
        <p>리뷰</p>
        <img
          className="toggle-btn"
          src={`/images/ProductDetail/arrow-${isToggleOn ? 'up' : 'down'}.png`}
          alt="toggle-btn"
          onClick={() => {
            setIsToggleOn(!isToggleOn);
          }}
        />
      </div>

      {isToggleOn && (
        <div className="reviews-container">
          {reviewList.map(({ id, name, created_at, comment }) => {
            const convertedTime = Date(created_at);
            const [weekday, month, day, year, timePart, timezone] =
              convertedTime.split(' ');
            const [hour, minute] = timePart.split(':');

            const formattedTime = `${month} ${day} ${year} ${hour}:${minute}`;

            return (
              <div className="review-posted" key={id}>
                <div className="review-top">
                  <div className="review-info">
                    <div className="username">{name}</div>
                    <div className="timestamp">{formattedTime}</div>
                  </div>
                  <div className="trash" onClick={() => handleReviewDelete(id)}>
                    삭제
                  </div>
                </div>

                <div className="review-text">{comment}</div>
              </div>
            );
          })}
          <textarea
            className="review-textarea"
            type="text"
            placeholder="리뷰 내용을 작성한 후 엔터키를 누르세요."
            onChange={handleText}
            onKeyUp={handleReviewPost}
            value={reviewText}
          />
        </div>
      )}
      <hr className="divider bottom" />
    </div>
  );
};

export default Review;
