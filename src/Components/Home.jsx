import React from 'react'
import { render } from 'react-dom';
import { useState } from 'react';
import { useGlobalContext } from '../context/global';
import styled from 'styled-components';
import Popular from './Popular';
import Upcoming from './Upcoming';
import Airing from './Airing';

function Home() {
    const {handleSubmit,search,searchAnime,handleChange
        ,getAiringAnime,getUpcomingAnime,getPopularAnime} = useGlobalContext();
    const [rendered, setRendered] = useState('popular');
    
    const switchComponent = () =>{
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered}/>;
            case 'upcoming':
                return <Upcoming rendered={rendered}/>;
            case 'airing':
                return <Airing rendered={rendered}/>;
            default:
                return <Popular rendered={rendered}/>;
        }
    }

  return (
    <HomepageStyled>
      <header>
        <h1 className='heading'><i>Anime Database</i></h1>
        <div className='logo'>
            <h1 className='rendering-title'>
                {rendered === 'popular' ? 'Popular Anime' :
                rendered === 'airing' ? 'Airing Anime' : 'Upcoming anime'}
            </h1>
            <div className='search-container'>
                <div className='filter-btn popular-filter'>
                    <button onClick={()=>{
                        setRendered('popular');
                    }}>Popular <i className='fas fa-fire'></i></button>
                </div>
                <form action='' className='search-form' onSubmit={handleSubmit}>
                    <div className='input-control'>
                        <input type='text' placeholder='Search' value={search} onChange={handleChange}/>
                        <button type='submit'>Search</button>
                    </div>
                </form>
                <div className='filter-btn airing-filter'>
                    <button onClick={()=>{
                        setRendered('airing');
                        getAiringAnime();
                    }}>Airing</button>
                </div>
                <div className='filter-btn upcoming-filter'>
                    <button onClick={()=>{
                        setRendered('upcoming');
                        getUpcomingAnime();
                    }}>Upcoming</button>
                </div>
            </div>
        </div>
      </header>
      {switchComponent()}
    </HomepageStyled>
  )
}

const HomepageStyled = styled.div`
    background-color: #292b63;
    position: relative;
    .heading{
        position:absolute;
        left: 20px;
    }
    .rendering-title{
        margin-top: 50px;
    }
    header{
        padding: 2rem 5rem;
        width: 60%;
        margin: 0 auto;
        transition: all .4s ease-in-out;
        h1{
            ${'' /* background: linear-gradient(to right, #A855F7, #27AE60);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; */}
            margin-bottom:30px;
            
        }
        .logo{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom:2rem;
        }
        .search-container{
                display: flex;
                align-items: center;
                justify-content: center;
                gap:1rem;
               button{
                display: flex;
                align-items: center;
                gap: .5rem;
                padding:.7rem 1.5rem;
                outline: none;
                border-radius:30px;
                font-size:1.2rem;
                background-color:#FFFFFF;
                cursor:pointer;
                transition: all .4s ease-in-out;
                border:5px solid #FFFFFF;
                &:hover{
                    background-color: #292b63;
                    color: #FFFFFF;
                    box-shadow: 0px 0px 10px #27ae60;
                }
               }
               form{
                position: relative;
                width: 100%;
                .input-control{
                    position:relative;
                    transition: all .4s ease-in-out;
                }
                .input-control input{
                    width: 350px;
                    padding:.7rem 1rem;
                    outline: none;
                    border-radius:30px;
                    font-size:1.2rem;
                    background-color:#FFFFFF;
                    transition: all.4s ease-in-out;
                    border:none;
                    font-size:1.2rem;
                    border: 5px solid #e5e7eb;
    
                }
                .input-control button{
                    position: absolute;
                    right: 0;
                    top:50%;
                    transform: translateY(-50%);
                    &:hover{
                        background-color: #292b63;
                        color: #FFFFFF;
                        box-shadow: 0px 0px 10px #27ae60;
                    }
                }
               }
        }
    }

`


export default Home
