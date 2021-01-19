import React from 'react';

import user1 from '../../assets/img/user-1.jpg';
import user2 from '../../assets/img/user-2.jpg';

import './UserReviews.scss';

const UserReviews = () => {
  return (
    <div className="user-reviews">
      <figure className="review">
        <blockquote className="review__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta
          animi, totam, itaque officia ex.
        </blockquote>
        <figcaption className="review__user">
          <img src={user1} alt="User 1" className="review__photo" />
          <div className="review__user-box">
            <p className="review__user-name">Nick Smith</p>
            <p className="review__user-date">Feb 23rd, 2017</p>
          </div>
          <div className="review__rating">7.8</div>
        </figcaption>
      </figure>
      <figure className="review">
        <blockquote className="review__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta
          animi.
        </blockquote>
        <figcaption className="review__user">
          <img src={user2} alt="User 2" className="review__photo" />
          <div className="review__user-box">
            <p className="review__user-name">Mary Thomas</p>
            <p className="review__user-date">Sep 13th, 2017</p>
          </div>
          <div className="review__rating">9.3</div>
        </figcaption>
      </figure>
      <button className="button-inline">
        See all <span>&rarr;</span>
      </button>
    </div>
  );
};

export default UserReviews;
