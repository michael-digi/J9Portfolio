import React, { useState, useEffect } from 'react';
import InstagramPhoto from '../InstagramPhoto';
import SectionTitleMobile from '../SectionTitleMobile';
import { useSelector, useDispatch } from 'react-redux'
import './PhotoJournal.css';

function PhotoJournal() {
  const [photos, setPhotos] = useState('')
  const URL = 'https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={%22id%22:%222695972618%22,%22first%22:9}'

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/' + URL)
    .then(response => response.json())
    .then(json => {
      let photos = json.data.user.edge_owner_to_timeline_media.edges
      setPhotos(photos)
    })
  }, [])

  return (
    <div id = 'photoGalleryContainer'>
      
      <div className='columnOne'>
        <div id='postContainer'>
          {photos.length >= 3 ?
           <>
            <InstagramPhoto img={photos[0].node.display_url} />
            <InstagramPhoto img={photos[1].node.display_url} />
            <InstagramPhoto img={photos[2].node.display_url} />
           </> : null
          }
        </div>
      </div>
      
      <div className='columnTwo'>
        <div id='postContainer'>
        {photos.length >= 6 ?
           <>
            <InstagramPhoto img={photos[3].node.display_url} />
            <InstagramPhoto img={photos[4].node.display_url} />
            <InstagramPhoto img={photos[5].node.display_url} />
           </> : null
          }
        </div>
      </div>
      
      <div className='columnThree'>
        <div id='postContainer'>
        {photos.length >= 9 ?
           <>
            <InstagramPhoto img={photos[6].node.display_url} />
            <InstagramPhoto img={photos[7].node.display_url} />
            <InstagramPhoto img={photos[8].node.display_url} />
           </> : null
          }
        </div>
      </div>

      <div className='columnOneMobile'>
        <div id='postContainer'>
          {photos.length >= 3 ?
           <>
            <SectionTitleMobile section={'Photo Journal'} />
            <InstagramPhoto img={photos[0].node.display_url} />
            <InstagramPhoto img={photos[1].node.display_url} />
            <InstagramPhoto img={photos[2].node.display_url} />
            <InstagramPhoto img={photos[3].node.display_url} />
            <InstagramPhoto img={photos[4].node.display_url} />
            <InstagramPhoto img={photos[5].node.display_url} />
            <InstagramPhoto img={photos[6].node.display_url} />
            <InstagramPhoto img={photos[7].node.display_url} />
            <InstagramPhoto img={photos[8].node.display_url} />
           </> : null
          }
        </div>
      </div>
    
    </div>
  )
}

export default PhotoJournal;