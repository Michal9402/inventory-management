import { Star } from 'lucide-react';
import React from 'react';

type Props = {
  rating: number;
};

export const Rating = ({ rating }: Props) => {
  const ratingArr = Array.from(Array(5).keys()).map((_, i) => i + 1);
  return ratingArr.map((i: number) => (
    <Star key={i} color={i <= rating ? '#FFC107' : '#E4E5E9'} className={`w-4 h-4`} />
  ));
};
