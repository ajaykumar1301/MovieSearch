import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios';

const CardContainer = ({searchText, setSearchText, content, setContent}) => {
 const [content1, setContent1] = useState([])

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log("trending", data.results);
    setContent1(data.results);
  };

  useEffect(() => {
    // window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='w-full h-[calc(100%_-_80px)] justify-center items-center p-12 flex flex-wrap gap-4 overflow-scroll'>
      {content && content.map((c) => (
        <Card
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type={c.media_type}
          vote_average={c.vote_average}
          overview={c.overview}
        />))}
        {searchText=="" && (content1 && content1.map((c) => (
        <Card
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type={c.media_type}
          vote_average={c.vote_average}
          overview={c.overview}
        />)))
        }
      
    </div>
  )
}

export default CardContainer