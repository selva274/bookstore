import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHref, useNavigate, useParams } from 'react-router-dom';
import "../App.css"
const Books = () => {

  const params = useParams();
  const [books, setBooks] = useState([]);     

  useEffect(() => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBH83PMiaLLocrsHJwpR9gF8xfNkwWwNnA&maxResults=30')  
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err))
  }, []);


  return (
    <div>
      <div className='content' style={{ margin: "50px" }}>
        {
          books.map((item) => {
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            return (
              <div className=" ">

                <div className="projectCard" >
                  <img src={thumbnail} alt="" style={{ marginTop: "20px", width: "120px", height: "150px"  }} />
                  <div className="info">
                    <div className="texts">
                      <h5 style={{ color: "black", fontSize: "12px" }}>{item.volumeInfo.title}</h5>
                      <p style={{ color: "black", fontSize: "12px" }}> {item.volumeInfo.authors}</p>
                      <button className='btn btn-sm btn-success' style={{ marginBottom: "40px", marginTop: "0px" }}>
                        <a href={item.volumeInfo.previewLink} style={{textDecoration:"none", color:"white"}}>Get Books</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Books
