import {useParams, useHistory} from 'react-router-dom'
import ReactPlayer from 'react-player'

function MovieInfo(props) {
  let { id_number } = useParams();
  let history = useHistory();
  const movies = props.movies;
  const movie = movies.filter((data)=>{
      if(data.id===id_number){return data}
  })
  return (
            <div className="MovieInfo" style={{height:"100vh",padding:10,display:"flex"}}>
                <ReactPlayer width="640px" height="360px" url={movie[0].trailerLink} controls/>
                <div className="descrip" style={{padding:"20px",paddingLeft:"80px", maxWidth:"40%"}}>
                <h3>{movie[0].title}</h3>
                <p>{movie[0].description}</p>
                </div>
                <div>
                <button onClick={() => history.goBack()}>Go Back</button>
                </div>
            </div>
    );
  }
export default MovieInfo;