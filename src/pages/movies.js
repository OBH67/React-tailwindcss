import React, {useState, useEffect} from 'react';
import '../Datatable.css';
import Axios from 'axios';


const Movies = () => {
    const [movieReviewList, setMovieList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
            setMovieList(response.data)
        });
    }, []);
    
    const deleteReview = (movie) => {
        Axios.delete(`http://localhost:3001/api/delete/${movie}`);
    };

    return (
        <div className='h-screen bg-green-300'>
        <br />
        <div className='table-wrapper'>
            <table className='fl-table'>
                <thead>
                    <tr>
                        <th>MOVIE</th>
                        <th>REVIEW</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {movieReviewList.map((val) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{val.movieName}</td>
                                <td>{val.movieReview}</td>
                                <td> <button onClick={() => {deleteReview(val.movieName)}}>Delete</button> </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    </div>
    )
}

export default Movies
