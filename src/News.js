import { StepIcon } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import './News.css'
function News() {
    const [apiResponse,setapires]=useState([]);
    
    useEffect(() => {
     
        async function getData()
        {
          const apiResponse = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=1`,
            {
              headers: {
                Authorization: `Bearer b9d460270df44c16a6b2ab83ae9b1eb3`,
              },
            },
          ).then(res => res.json());
            
          const { articles } = apiResponse;
            console.log(articles)
            setapires(articles);
        }

        getData();
    }, [])

    console.log(apiResponse)
    
    return (
        <div className="news">
            {apiResponse.map((article,index)=>(
                <div key={index} className={"post"}>
                    <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                    {!!article.urlToImage && <img src={article.urlToImage} />}
                    <p>{article.description}</p>
                   
              </div>
  
            ))}
        </div>
    )
}

export default News
