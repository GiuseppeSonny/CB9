const MovieCard = ({
  handleMouseEnter,
  handleMouseLeave,
  image,
  match,
  rating,
  duration,
  categories,
  isActive = false,
}) => {
  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="movie-card"
    >
      <img src={image} alt={""} className="movie_card" />
      {isActive ? (
        <div>
          <section className="action">action</section>
          <section className="info">info</section>
          <section className="categories">categories</section>
        </div>
      ) : null}
    </article>
  );
};
export default MovieCard;
