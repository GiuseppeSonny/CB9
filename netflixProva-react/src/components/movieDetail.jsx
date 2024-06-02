const movieDetail = ({ image, match, rating, duration, categories = [] }) => {
  return (
    <div>
      <img src={image} alt={""} className="movie_card" />
      {isActive ? (
        <div>
          <section className="action">action</section>
          <section className="info">info</section>
          <section className="categories">categories</section>
        </div>
      ) : null}
    </div>
  );
};

export default movieDetail;
