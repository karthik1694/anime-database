import React from 'react'
import { useGlobalContext } from '../context/global'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
function Popular({rendered}) {
    const {popularAnime,isSearch,searchResults} = useGlobalContext();
    const conditionalRender = () =>{
        if(!isSearch && rendered==='popular'){
            return popularAnime.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url}/>
                </Link>
            })
        }
        else{
            return searchResults.map((anime) => {
                return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <img src={anime.images.jpg.large_image_url}/>
                </Link>
            })
        }
    }
  return (
        <PopularStyled>
            <div className='popular-anime'>
                {conditionalRender()}
            </div>
            <Sidebar/>
        </PopularStyled>
  )
}
const PopularStyled = styled.div`
    display: flex;
    .popular-anime {
        margin-top:2rem;
        padding-top:2rem;
        padding-bottom:2rem;
        padding-left:5rem ;
        padding-right:5rem;
        width:100%;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));  
        grid-gap:2rem;
        background-color:#121452;
        border-top;5px solid #e5e7eb;
        a{
            height:500px;
            border-radius:7px;
            border: 4px solid #e5e7eb;
        }
        a img{
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:7px;
            border: 1px;
        }
    }
`
export default Popular
