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

  // // Review GET
  useEffect(() => {
    fetch(`${APIS.reviews}/${productsId}`)
      .then(res => res.json())
      .then(data => {
        setReviewList(data.Review);
      });
  }, [productsId]);

  // Review POST
  const handleReviewPost = e => {
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
        setReviewList(prev => [...prev, reviewText]);
        setReviewText('');
        window.location.reload();
      });
  };

  // Review DELETE
  const handleReviewDelete = () => {
    fetch(`${APIS.reviews}/${reviewList.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(window.location.reload());
  };

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
            const convertedTime = Date(created_at * 1000).toLocaleString(
              'en-US',
              {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
              }
            );

            const [weekday, month, day, year, timePart, timezone] =
              convertedTime.split(' ');
            const [hour, minute] = timePart.split(':');

            const formattedTime = `${month} ${day} ${year}, ${hour}:${minute}`;

            return (
              <div className="review-posted" key={id}>
                <div className="review-top">
                  <div className="review-info">
                    <div className="username">{name}</div>
                    <div className="timestamp">{formattedTime}</div>
                  </div>
                  <div className="trash" onClick={handleReviewDelete}>
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
            onKeyUp={e => {
              e.key === 'Enter' && reviewText !== '' && handleReviewPost();
            }}
            value={reviewText}
          />
        </div>
      )}
      <hr className="divider bottom" />
    </div>
  );
};

export default Review;
