import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, picture, comments } = review;


    return (
        <div className='review-section container p-3'>
            <img src={picture} alt="" />
            <div>
                <h4>{name}</h4>

                <p className=' text-wrap' title={comments}>
                    {comments}

                </p>


            </div>

        </div >
    );
};

export default Review;