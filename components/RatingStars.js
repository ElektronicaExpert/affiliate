export default function RatingStars({ rating = 4 }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
      ))}
    </div>
  );
}
