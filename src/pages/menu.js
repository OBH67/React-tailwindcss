import React, { useState } from 'react';
import Axios from 'axios';


const Menu = () => {

  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieList] = useState([]);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    });

    setMovieList([
      ...movieReviewList,
      { movieName: movieName, movieReview: review },
    ]);
  };

  return (
    <div className="bg-gray-600 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
      
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

         <div className="-mx-3 md:flex mb-6">
           <div className="md:w-full px-3">
             <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
               Movie Name
             </label>
             <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
             type="text" 
             name="movieName" 
             placeholder="Movie Name" 
             onChange={(e) => { setMovieName(e.target.value) }}
             />
           </div>           
         </div>

         <div className="-mx-3 md:flex mb-6">
           <div className="md:w-full px-3">
             <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
               Review
             </label>
             <input 
             className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" 
             type="text" name="review" 
             placeholder="Review" 
             onChange={(e) => { setReview(e.target.value) }}
             />
           </div>           
         </div>

         <div className="">
           <div className="flex flex-col justify-center items-center">
             <button onClick={submitReview} className="bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 animate-bounce rounded-full">
               Submit
             </button>
           </div>
         </div>

        </div>
     
    </div>
  );
};

export default Menu;
