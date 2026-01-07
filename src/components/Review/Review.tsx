import './review/review.scss';
import './review/__text/review__text.scss';
import './review/__author/review__author.scss';
import type {ReviewModel} from "./model/ReviewModel.ts";

export const Review = ({getParagraph, getAuthor}: ReviewModel) => {
    return (
        <div className='review'>
            <p className='review__text'>{getParagraph()}</p>
            <p className='review__author'>{getAuthor()}</p>
        </div>
    );
}