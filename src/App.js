import React, {useEffect, useState} from 'react';
import Characters from './component/Characters';
import Navbar from './component/Navbar';
import Pagination from './component/Pagination';


function App() {
  const [characters, setCharacters]=useState([]);
  const [info, setInfo]= useState({});
  const initialUrl="https://rickandmortyapi.com/api/character";
  const fetchCharacters=(url)=>{
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
      setCharacters(data.results);
      setInfo(data.info);
    })
    .catch((error)=>console.log(error));
  };
  const onPrevious=()=>{
    fetchCharacters(info.prev);
  };
  const onNext=()=>{
    fetchCharacters(info.next);
  };
  useEffect(()=>{
    fetchCharacters(initialUrl);
  },[]);
  return (
    <>
    <Navbar brand="Rick and Morty App"/>
    <div className=''>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <Characters characters={characters}/>
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
    </>
  );
}

export default App;
