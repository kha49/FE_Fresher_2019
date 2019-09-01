const Gallery = {
  init: () => {
    const arrModal = [
      {
        imgGallery: 'imgGallery1',
        modalGallery: 'modalGallery1'
      },
      {
        imgGallery: 'imgGallery2',
        modalGallery: 'modalGallery2'
      },
      {
        imgGallery: 'imgGallery3',
        modalGallery: 'modalGallery3'
      },
      {
        imgGallery: 'imgGallery4',
        modalGallery: 'modalGallery4'
      },
      {
        imgGallery: 'imgGallery5',
        modalGallery: 'modalGallery5'
      },
      {
        imgGallery: 'imgGallery6',
        modalGallery: 'modalGallery6'
      }
    ]
    arrModal.forEach((modal) => {
      const imgGallery = document.querySelector(`#${modal.imgGallery}`);
      const modalGallery = document.querySelector(`#${modal.modalGallery}`);
      if (imgGallery) {
        Gallery.showModal(imgGallery, modalGallery);
        Gallery.closedModal(modalGallery);
      }
    })
  },
  showModal: (imgGallery, modalGallery) => {
    const modalBox = document.querySelector('.kem-home-gallery__modal-gallery');
    const kemBody = document.querySelector('body');

    if (imgGallery) {
      imgGallery.addEventListener('click', () => {
        modalGallery.classList.add('show-modal');
        modalBox.classList.add('show-modal');
        kemBody.classList.add('is-noscroll');
      });
    }
  },
  closedModal: (modalGallery) => {
    const btnClosed = document.querySelectorAll(".modal-gallery__closed");
    const modalBox = document.querySelector(".kem-home-gallery__modal-gallery");
    const kemBody = document.querySelector('body');
    if (btnClosed) {
      btnClosed.forEach((item) => {
        item.addEventListener('click', () => {
          if (modalGallery) {
            modalGallery.classList.remove('show-modal');
          }
          modalBox.classList.remove('show-modal');
          kemBody.classList.remove('is-noscroll');
        });
      });
    }
    if (modalBox) {
      modalBox.addEventListener('click', (event) => {
        if (!event.target.closest('.kem-home-gallery__modal-gallery__item')) {
          if (modalGallery) {
            modalGallery.classList.remove('show-modal');
          }
          modalBox.classList.remove('show-modal');
          kemBody.classList.remove('is-noscroll');
        }
      });
    }
  },
  modalSlider: () => {
    $('.multiple-modal-gallery').slick({
      dots: false,
      infinite: false,
      speed: 300,
      // loop: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false
    });
  },
  slickSlider: () => {
    $('.multiple-items-gallery').slick({
      dots: false,
      infinite: true,
      speed: 300,
      // loop: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: false,
      responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  // lightGallery: () => {
  //   $('.multiple-items-gallery').lightGallery(

  //   );
  // }
}
export default Gallery;