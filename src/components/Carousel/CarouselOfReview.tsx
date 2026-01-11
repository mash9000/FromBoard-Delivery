import './carousel-of-review/carousel-of-review.scss';
import './carousel-of-review/__inner-box/carousel-of-review__inner-box.scss';
import './carousel-of-review/__inner-box/_single-items/carousel-of-review__inner-box--single-item.scss';
import './carousel-of-review/__heading/carousel-of-review__heading.scss';
import './carousel-of-review/__restraining-box/carousel-of-review__restraining-box.scss';

import type {ReviewProps} from "../Review/model/ReviewProps.ts";
import {useState} from "react";
import {ButtonPrevNext} from "../ButtonPrevNext/ButtonPrevNext.tsx";
import {Review} from "../Review/Review.tsx";

type CarouselOfReviewProps = {
    limitOnDisplayingReviewCards: number;
    reviews: ReviewProps[];
}

export const CarouselOfReview = ({reviews, limitOnDisplayingReviewCards}: CarouselOfReviewProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(((currentIndex + 1) <= reviews.length - limitOnDisplayingReviewCards) ? currentIndex + 1 : currentIndex);
    };

    const prevSlide = () => {
        setCurrentIndex(((currentIndex - 1) >= 0) ? currentIndex - 1 : currentIndex);
    };

    const displayOfControls = reviews.length !== 1;

    return (
        <div className='carousel-of-review'>
            <div className={`carousel-of-review__inner-box ${limitOnDisplayingReviewCards === 1 ? 'carousel-of-review__inner-box--single-item' : ''}`}>
                <h3 className='carousel-of-review__heading'>Отзывы</h3>
                {displayOfControls &&
                    <ButtonPrevNext type='prev' changeSlide={prevSlide}/>}
                <div className='carousel-of-review__restraining-box'>
                    {
                        reviews.slice(currentIndex, currentIndex + limitOnDisplayingReviewCards).map((review: ReviewProps) => (
                            <Review
                                key={review.getParagraph()}
                                getParagraph={review.getParagraph}
                                getAuthor={review.getAuthor}/>))
                    }
                </div>
                {displayOfControls &&
                    <ButtonPrevNext type='next' changeSlide={nextSlide}/>}
            </div>
        </div>
    );
}