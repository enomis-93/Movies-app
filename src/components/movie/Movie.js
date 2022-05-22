export default function Movie({ title, backdrop_path }) {
  return (
    <div className="d-flex flex-column justify-content-end">
      <div>
        <h2 className="h6 text-center text-white">{title}</h2>
      </div>
      <img
        className="border rounded mb-2"
        src={"https://image.tmdb.org/t/p/w500" + backdrop_path}
        alt=""
      />
    </div>
  );
}
