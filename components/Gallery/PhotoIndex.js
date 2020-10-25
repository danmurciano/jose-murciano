import React, { useEffect, useState } from "react";
import { photoList } from "../../public/photoList";

function PhotoIndex({ pageA, setPageA, pageB, setPageB, activePage, setActivePage, indexPage }) {
  const [ activeThumbnail, setActiveThumbnail ] = React.useState(`thumb_${pageA.number}`);
  let pictures = [];
  const pageSize = 8;


  if (indexPage === 1) {
    pictures = photoList.slice(0, pageSize);
  } else {
    const skips = pageSize * (indexPage - 1);
    pictures = photoList.slice(skips, skips + pageSize);
  };


  function handlePhotoSelect(photo, id) {
    if (activePage === "A" && pageA !== photo) {
      setPageB(photo);
      setActivePage("B");
    } else if (activePage === "B" && pageB !== photo) {
      setPageA(photo);
      setActivePage("A");
    }
    setActiveThumbnail(id);
  }


  function mapPhotosToIndex(pictures) {
    return pictures.map(photo => (

      <div class="col-index">
          <img
            id={`thumb_${photo.number}`}
            src={`/images/thumbnails/${photo.number}.png`}
            alt="..."
            onClick={() => handlePhotoSelect(photo, event.target.id)}
            class={`thumb_${photo.number}` === activeThumbnail ?
              "indexThumbnailActive" :
              "indexThumbnail" }
          />
      </div>
    ));
  }

  return (
    <div class="photoIndexRow">
      <div class="row photoIndex">
          {mapPhotosToIndex(pictures)}
      </div>
    </div>
  );
}

export default PhotoIndex;
