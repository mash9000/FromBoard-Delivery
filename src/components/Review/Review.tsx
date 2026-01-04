import './review.scss';
import './review__text.scss';
import './review__author.scss';
import type {ReviewModel} from "./ReviewModel.ts";

export const Review = ({getParagraph, getAuthor}: ReviewModel) => {
    return (
        <div className='review'>
            <p className='review__text'>{getParagraph()}</p>
            <p className='review__author'>{getAuthor()}</p>
        </div>
    );
}