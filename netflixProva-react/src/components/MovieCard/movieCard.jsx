const MovieCard = ({
  handleHover,
  image,
  match,
  rating,
  duration,
  categories,
  isActive = false,
}) => {
  return (
    <article onMouseOver={handleHover} className="movie-card">
      <img src={image} alt={""} />
      {isActive ? (
        <div>
          <section className="action"></section>
          <section className="info"></section>
          <section className="categories"></section>
        </div>
      ) : null}
    </article>
  );
};
export default MovieCard;