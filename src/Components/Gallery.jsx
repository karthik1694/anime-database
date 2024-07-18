import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Gallery() {
    const {getPictures,pictures} = useGlobalContext();
    const {id} = useParams();

    const [index,setIndex] = useState(0);
    const handleImageClick = (i)=>{
        setIndex(i);
    }

    useEffect(() =>{
        getPictures(id);
    },[id]);
  return (
    <GalleryStyled>
      <div className='back'>
        <Link to="/">
        <i className='fas fa-arrow-left'></i>
        Back Home</Link>
      </div>
      <div className='big-image'>
        <img src={pictures[index]?.jpg.image_url}/>
      </div>
      <div className='small-images'>
        {pictures?.map((picture,i)=>{
            return <div className='image-con' onClick={()=>{
                handleImageClick(i);
            }} key={i}>
                <img src={picture?.jpg.image_url}
                style={{
                    border: i === index ? "4px solid #27ae60" : "3px solid #fff",
                    filter: i === index ? 'grayscale(0)' : 'grayscale(60%)',
                    transform: i === index ? 'scale(1,1)' : 'scale(1)',
                    transition: 'all 0.3s ease-in-out',
                }}
                />
            </div>
        })}
      </div>
    </GalleryStyled>
  )
}

const GalleryStyled = styled.div`
   
    min-height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .back{
        position: absolute;
        top: 2rem;
        left: 2rem;
        a{
            font-weight: 600;
            text-decoration: none;
            color: #27ae60;
            display:flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
    .big-image{
        display: inline-block;
        padding:2rem;
        margin:2rem 0;
        background-color: #292b63;
        border-radius: 7px;
        border: 5px solid #e5e7eb;
        position:relative;
        img{
            width: 350px;
            
        }
    }
    .small-images{
        display:flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        width: 80%;
        padding: 2rem;
        border-radius:10px;
        background-color: #292b63;
        border: 5px solid #e5e7eb;
        img{
            width:7rem;
            height:7rem;
            object-fit:cover;
            cursor:pointer;
            border-radius:10px;
            border: 3px solid #27ae60;     
        }
    }
`;
export default Gallery
