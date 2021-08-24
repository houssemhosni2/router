import MovieCard from './MovieCard'

function MovieList(props) {
    const movies = props.movies;
    const movie = movies.map((x) => {
        return (
                <div key={x.id}>
                    <MovieCard title={x.title} description={x.description} posterUrl={x.posterUrl} rate={x.rate} id={x.id} trailerLink={x.trailerLink} />
                </div>
        );
    })
    return (
        <>
            {movie}
        </>
    );
  }
export default MovieList;