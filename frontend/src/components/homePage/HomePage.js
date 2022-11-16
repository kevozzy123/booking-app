import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './home.module.css'
import SearchBar from '../searchBar/SearchBar'

function HomePage() {
  const [searched, setSearched] = useState(false)
  const [listing, setListing] = useState([])
  useEffect(() => {
    axios({
      url: 'http://localhost:4000/hotel',
      method: 'get'
    }).then(res => {
      console.log(res)
      setListing(res.data.result)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className={style['home-page']}>
      <SearchBar />
      {searched ?
        <h1>Results:</h1> :
        <h1>Recommendations for you</h1>}
      <div className={style['list-container']}>
        {listing.map(item => {
          return (
          <article className={style['list-item']} key={item._id}>
            <div className={style['img-box']}>
              <img src={item.images.picture_url} alt="listing" />
              <i className='iconfont'></i>
            </div>
            <div className={style.content}>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
            </div>
          </article>
          )
        })}
      </div>

    </div>
  )
}

export default HomePage