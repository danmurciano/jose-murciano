import React from "react";
import ContactModal from "./ContactModal";
import { photoList } from "../../public/photoList";
import { Button, Modal } from 'semantic-ui-react';


export default function PhotoMain({ pageA, pageB, activePage }) {
  const [ contactModal, setContactModal] = React.useState(false);

  return (
    <>
    <div class="photoMainDiv">

      <div class={`animated ${activePage === "A" ? "image-top" : "image-bottom"}`} >
        <img src={`/images/full_size/${pageA.number}.jpg`} class="photoMain" alt="" />
      </div>

      <div class={`animated ${activePage === "B" ? "image-top" : "image-bottom"}`} >
        <img src={`/images/full_size/${pageB.number}.jpg`} class="photoMain" alt="" />
      </div>

    </div>

    <div class="photoBottom">
      <div class={`animated ${activePage === "A" ? "info-top" : "info-bottom"}`} >
        <p className="photoInfo"> Acrylic &nbsp;{pageA.size} </p>
      </div>

      <div class={`animated ${activePage === "B" ? "info-top" : "info-bottom"}`} >
        <p className="photoInfo"> Acrylic &nbsp;{pageB.size} </p>
      </div>
    </div>

    <div class="photoButtonDiv">
      <div class={`animated ${activePage === "A" ? "button-top" : "button-bottom"}`} >
        <Button
          size="small"
          className="availability-button"
          onClick={() => setContactModal(true)}
        >
          Check Availability
        </Button>
      </div>

      <div class={`animated ${activePage === "B" ? "button-top" : "button-bottom"}`} >
        <Button
          size="small"
          className="availability-button"
          onClick={() => setContactModal(true)}
        >
          Check Availability
        </Button>
      </div>
    </div>


    <Modal
      className="contactModal"
      dimmer="blurring"
      centered
      closeIcon
      open={contactModal}
      onClose={() => setContactModal(false)}
      onOpen={() => setContactModal(true)}
    >
      <ContactModal
        setContactModal={setContactModal}
        page={activePage === "A" ? pageA.number : pageB.number}
      />
    </Modal>
    </>

  );
}
