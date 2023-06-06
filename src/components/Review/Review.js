import React, { useState } from 'react';
import './Review.scss';

const Review = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const [reviewText, setReviewText] = useState('');

  const handleText = e => {
    setReviewText(e.target.value);
  };

  const handleKeyup = e => {
    if (e.key === 'Enter' && reviewText !== '') {
      handleText(e);
      setReviewList([...reviewList, reviewText]);
      setReviewText('');
    }
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
          {reviewList.map((comment, index) => {
            return (
              <div className="review-posted" key={index}>
                <div className="review-top">
                  <div className="review-info">
                    <div className="username">홍길동</div>
                    <div className="timestamp">2023년 6월 6일 21:09</div>
                  </div>
                  <div className="trash">삭제</div>
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
            onKeyUp={handleKeyup}
            value={reviewText}
          />
        </div>
      )}
      <hr className="divider bottom" />
    </div>
  );
};

export default Review;
