import React, {useState, useEffect} from 'react';
import '../Datatable.css';
import Axios from 'axios';

const About = () => {
  const [movieReviewList, setMovieList] = useState([]);

  useEffect(() => {
      Axios.get('http://localhost:3001/api/get').then((response) => {
          setMovieList(response.data)
      });
  }, []);

  return (
    <div className='h-screen bg-green-300'>
    <br />
    <div className='table-wrapper'>
        <table className='fl-table'>
            <thead>
                <tr>
                    <th>MOVIE</th>
                    <th>REVIEW</th>
                </tr>
            </thead>
            {movieReviewList.map((val) => {
                return (
                    <tbody>
                        <tr>
                            <td>{val.movieName}</td>
                            <td>{val.movieReview}</td>
                        </tr>
                    </tbody>
                );
            })}
        </table>
    </div>
</div>
  );
};

export default About;
