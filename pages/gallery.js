import React from "react";
import PhotoMain from "../components/Gallery/PhotoMain";
import PhotoIndex from "../components/Gallery/PhotoIndex";
import IndexPagination from "../components/Gallery/IndexPagination";
import { photoList } from "../public/photoList";
import { Button, Modal, Reveal } from 'semantic-ui-react';
import { CSSTransition } from 'react-transition-group';


export default function Gallery() {
  const [ pageA, setPageA ] = React.useState(photoList[0]);
  const [ pageB, setPageB ] = React.useState("");
  const [ activePage, setActivePage ] = React.useState("A");
  const [ indexPage, setIndexPage ] = React.useState(1);
  const pageSize = 8;
  const totalPictures = photoList.length;
  const totalPages = Math.ceil(totalPictures / pageSize);


  return (
    <div class="pageGallery">

          <PhotoMain
            pageA={pageA}
            pageB={pageB}
            activePage={activePage}
          />


      <div class="indexSection">

        <PhotoIndex
          pageA={pageA}
          setPageA={setPageA}
          pageB={pageB}
          setPageB={setPageB}
          activePage={activePage}
          setActivePage={setActivePage}
          indexPage={indexPage}
          totalPages={totalPages}
        />


        <div class="paginationRow">
          <IndexPagination
            indexPage={indexPage}
            setIndexPage={setIndexPage}
            totalPages={totalPages}
          />
        </div>

      </div>

    </div>
  );
}
