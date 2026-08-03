// @ts-nocheck

import { Star } from "lucide-react";
import { useMemo } from "react";

export default function StarRating({rating}: {rating: number}) {
  rating < 0 ? rating = 0 : "";

  const ratingFillValue = useMemo(() => {
    return Array(Math.round(rating)).fill('');
  }, [rating]);

  const ratingEmptyValue = useMemo(() => {
    return Array(5 - ratingFillValue?.length).fill('');
  }, [rating]);

  return (
    <div className="star-rating">
      {
        ratingFillValue?.map((_, index) => <Star className="star-rating-fill" key={index} />)
      }
      {
        ratingEmptyValue?.map((_, index) => <Star className="star-rating-empty" key={index} />)
      }
    </div>
  );
}