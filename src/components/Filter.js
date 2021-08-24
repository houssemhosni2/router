import {useState} from 'react'
import MovieList from './MovieList'

function Filter(props) {
    const [search, setSearch] = useState(null)

    const searchSpace=(event)=>{
        let keyword = event.target.value;
        setSearch(keyword);
    }

    const movies = props.movies;
    const movie = movies.filter((data)=>{
        if(search == null){return data}
        else if(data.title.toLowerCase().includes(search.toLowerCase()) || data.rate.includes(search.toLowerCase())){
            return data
        }
    })
return (
    <div className="Filter">
        <input type="text" placeholder="Enter Movie title or rate" onChange={(e)=>searchSpace(e)} />
        <div className="MovieList">
        <MovieList movies={movie}/>
        </div>
    </div>
);
}
export default Filter;