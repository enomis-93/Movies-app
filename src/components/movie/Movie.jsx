export default function Movie(props) {
  return (
    <div className="d-flex flex-column justify-content-end">
      <div>
        <h2 className="h6 text-center text-white">{props.movie.title}</h2>
      </div>
      <img
        className="border rounded mb-2"
        src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path}
        alt=""
      />
    </div>
  );
}
