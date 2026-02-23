export default function Rating({ rating }) {

    const ratingScore = Number(rating);

    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className={`rating-score ${i <= ratingScore ? "is-full" : ""}`}>
                    ★
                </span>
            ))}
        </div>
    )
}