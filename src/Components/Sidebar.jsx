import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context/global';
import { Link } from 'react-router-dom';
function Sidebar() {
    const {popularAnime} = useGlobalContext();

    const sorted = popularAnime?.sort((a,b) =>{
        return a.score - b.score;
    })
  return (
    <SidebarStyled>
      <h3>Top 5 Popular</h3>
      <div className='anime'>
        {sorted?.slice(0,5).map((anime) =>{
            return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                <img src={anime.images.jpg.large_image_url}/>
                <h5>
                    {anime.title}
                </h5>
            </Link>
        })}
      </div>
    </SidebarStyled>
  )
}
const SidebarStyled = styled.div`
    margin-top:2rem;
    border-top:1px solid #27ae60;
    padding-right:4rem;
    padding-left:5rem;
    padding-top:2rem;
    h3{
        font-size:1.5rem;
        color:#27ae60;
        margin-bottom:1rem;
    }
    .anime{
        display:flex;
        flex-direction:column;
        width:100px;
        img{
            width:120px;
            border-radius:5px;
            border: 5px solid #fff;
        }
        a{
            margin-top:1rem;
            display:flex;
            flex-direction:column;
            gap:0.5rem;
            color:#27ae60;
            h4{
                font-size:1.1rem;
            }
        }
    }
`;

export default Sidebar
