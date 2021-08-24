import {Link} from 'react-router-dom';

function MovieCard(props) {
    return (
            <div className="MovieCard" >
                <Link to={"/" + props.id}>
                  <img src={props.posterUrl} alt="avengers"></img>
                </Link>
                <div className="movieInfo">
                <h3>{props.title}</h3>
                <span>{props.rate}</span>
                </div>
                <p>{props.description}</p>
            </div>
    );
  }
export default MovieCard;