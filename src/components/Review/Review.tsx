import './review/review.scss';
import './review/__text/review__text.scss';
import './review/__author/review__author.scss';
import type {ReviewProps} from "./model/ReviewProps.ts";

export const Review = (data: ReviewProps) => {
    return (
        <div className='review'>
            <p className='review__text'>{data.getParagraph()}</p>
            <p className='review__author'>{data.getAuthor()}</p>
        </div>
    );
}