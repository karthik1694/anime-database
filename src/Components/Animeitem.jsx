import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Animeitem() {
    const {id} = useParams();

    //state
    const [anime, setAnime] = useState({});
    const [characters, setCharacters] = useState([]);
    const [showMore, setShowMore] = useState(false);

    //destructure

    const {title, synopsis, trailer,duration,aired,season,images,rank,score,score_by,popularity,status,rating,source} = anime

    //fetch anime based on id

    const getAnime = async (anime)=>{
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnime(data.data);
        console.log(data.data);
    }

    const getCharacters = async (characters)=>{
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
        const data = await response.json();
        setCharacters(data.data);
        console.log(data.data);
    }

    useEffect(()=>{
        getAnime(id);
        getCharacters(id);
    },[]);



  return (
    <AnimeItemStyled>
      <h1>{title}</h1>
      <div className='details'>
        <div className='detail'>
            <div className='image'>
                <img src={images?.jpg.large_image_url}/>
            </div>
            <div className='anime-details'>
                <p><span>Aired</span><span>{aired?.string}</span></p>
                <p><span>Rating</span><span>{rating}</span></p>
                <p><span>Rank</span><span>{rank}</span></p>
                <p><span>Score</span><span>{score}</span></p>
                <p><span>Scored By</span><span>{score_by}</span></p>
                <p><span>Popularity</span><span>{popularity}</span></p>
                <p><span>Status</span><span>{status}</span></p>
                <p><span>Source</span><span>{source}</span></p>
                <p><span>Season</span><span>{season}</span></p>
                <p><span>Duration</span><span>{duration}</span></p>            
            </div>
        </div>
        
        <p className='description'>
            {showMore ? synopsis : synopsis?.substring(0,450) + '...'}
            <button onClick={()=>setShowMore(!showMore)}>
                {showMore? 'Show Less' : 'Show More'}
            </button>
        </p>
      </div>
      <h3 className='title'>Trailer</h3>
      <div className='trailer-con'>
        {trailer?.embed_url && (
            <iframe
                src={trailer.embed_url}
                title = "Inline Frame Example"
                width="800"
                height="450"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        )}
        </div>
        <h3 className='title'>Characters</h3>
        <div className='characters'>
            {characters?.map((character,index) =>{
                const {role} = character
                const {images,name,mal_id} = character.character;
                return <Link to={`/character/${mal_id}`} key={index}>
                    <div className='character'>
                        <img src={images?.jpg.image_url}/>
                        <h4>{name}</h4>
                        <p>{role}</p>
                    </div>
                </Link>
            })}
        </div>
    </AnimeItemStyled>
  )
}

const AnimeItemStyled = styled.div`
    padding: 3rem 18rem;
    h1{
        display: inline-block;
        font-size: 3rem;
        margin-bottom:1.5rem;
        cursor:pointer;
        background: linear-gradient(to right, #A855F7, #27AE60);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        trasition: all .4s ease-in-out;
        &:hover{
            transform: skew(-3deg);
        }
    }
    h3{
        display: inline-block;
        font-size: 3rem;
        margin-bottom:1.5rem;
        cursor:pointer;
        background: linear-gradient(to right, #A855F7, #27AE60);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        trasition: all .4s ease-in-out;
        &:hover{
            transform: skew(-3deg);
        } 
    }
    .description{
        margin-top: 2rem;
        font-size: 1.2rem;
        line-height: 2.0rem;
        button{
            background-color: transparent;
            border: none;
            outline: none;
            cursor:pointer;
            font-size:1.2rem;
            color:#27ae60;
            font-weight:600;     
        }
    }
    .details{        
        background-color:#292b63; //light purple
        border-radius: 20px;
        padding:2rem;
        border: 4px solid #e5e7eb;
        margin-bottom: 2rem;
        .detail{
            display:grid;
            grid-template-columns: repeat(2,1fr);
            img{
                border-radius: 10px;
            }
        }
    }
    .anime-details{
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        p{
            display: flex;
            gap: 1rem;
        }
        p span:first-child{
            font-weight: 600;
            color:#27ae60;
        }
    }
    .trailer-con{
        display:flex;
        justify-content: center;
        align-items: center;
        height: 600px;
        width:800px;
        margin-left: 70px;
        margin-bottom: 20px;
        iframe{
            width: 100%;
            height:100%;
            outline:none;
            border: 4px solid #e5e7eb;
            padding: 1.5rem;
            border-radius: 10px;
            background-color:#292b63;
        }
    }
    .characters{
        display:grid;
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
        grid-gap: 2rem;
        background-color: #292b63;
        padding:2rem;
        border-radius: 20px;
        border: 4px solid #e5e7eb;
    }
    .character{
        padding: .4rem .6rem;
        border-radius: 10px;
        background-color:#292b63;
        transition: all .4s ease-in-out;
        img{
            width:100%;
        }
        h4{
            padding: .4rem 0;
            color: #27ae60;
            font-weight: 700;
        }
        p{
            color: #fff;
        }
        &:hover{
            transform: translate(-3px);
            box-shadow: 0px 0px 10px #27ae60;
        }
    }

    
    

`;

export default Animeitem
