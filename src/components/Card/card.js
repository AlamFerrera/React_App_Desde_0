import React from 'react';

const List = ({movie}) => {
    return(
        <div className="col-md-4 mb-2">
            <div className="card">
                <img className="card-img-top w-100" src={movie.Poster} alt={movie.Title}></img>
                <div className="card-body">
                    <h4>{movie.Title} - {movie.Year}</h4>
                    <p>{movie.Type}</p>
                </div>
            </div>
        </div>
    );
}

export default List;
