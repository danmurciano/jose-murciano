import React from "react";
import { photoList } from "../public/photoList";
import { Label, Button, Modal } from 'semantic-ui-react';


export default function Home() {
  return (
      <div class="pageHome">

        <div class="home-image">
          <div>
            <img class="home-image-front" />
          </div>
        </div>

        <div class="home-main">
          <div class="">
            <div class="aboutText-div">
              <h1> Welcome </h1>
              <p class="aboutText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Viverra maecenas
                accumsan lacus vel facilisis volutpat est velit egestas. Mauris sit amet massa vitae.
                Egestas congue quisque egestas diam in arcu cursus. Diam donec adipiscing tristique risus
                nec feugiat in fermentum. Ullamcorper malesuada proin libero nunc consequat interdum
                varius sit. Id porta nibh venenatis cras sed. Imperdiet massa tincidunt nunc pulvinar
                sapien et ligula ullamcorper malesuada.
              </p>

              <div class="galleryButtonDiv">
                <Button
                  className="galleryButton"
                  size="huge"
                  href="/gallery"
                 >
                  Go To Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
  );
}
