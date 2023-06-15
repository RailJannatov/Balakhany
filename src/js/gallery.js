// $(".slider-single").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: true,
//   fade: false,
//   adaptiveHeight: true,
//   infinite: false,
//   useTransform: true,
//   speed: 400,
//   cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
// });

// $(".slider-nav")
//   .on("init", function (event, slick) {
//     $(".slider-nav .slick-slide.slick-current").addClass("is-active");
//   })
//   .slick({
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     dots: false,
//     focusOnSelect: false,
//     infinite: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 5,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//         },
//       },
//       {
//         breakpoint: 420,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//     ],
//   });

// $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
//   $(".slider-nav").slick("slickGoTo", currentSlide);
//   var currrentNavSlideElem =
//     '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
//   $(".slider-nav .slick-slide.is-active").removeClass("is-active");
//   $(currrentNavSlideElem).addClass("is-active");
// });

// $(".slider-nav").on("click", ".slick-slide", function (event) {
//   event.preventDefault();
//   var goToSingleSlide = $(this).data("slick-index");

//   $(".slider-single").slick("slickGoTo", goToSingleSlide);
// });
$(document).ready(function () {
  $(".thumbnail-slider img").click(function () {
    var src = $(this).attr("src");
    $(".main-slider img").attr("src", src);
  });

  $(".slider-prev").click(function () {
    var currentImage = $(".main-slider img").attr("src");
    var previousImage = $(".thumbnail-slider img[src='" + currentImage + "']")
      .prev()
      .attr("src");
    if (previousImage) {
      $(".main-slider img").attr("src", previousImage);
    }
  });

  $(".slider-next").click(function () {
    var currentImage = $(".main-slider img").attr("src");
    var nextImage = $(".thumbnail-slider img[src='" + currentImage + "']")
      .next()
      .attr("src");
    if (nextImage) {
      $(".main-slider img").attr("src", nextImage);
    }
  });
});

const cardItem = document.querySelectorAll("#foto-gallery .card-item");

const fotoModal = document.querySelector(".foto-modal");
cardItem.forEach((item) =>
  item.addEventListener("click", function () {
    fotoModal.style.display = "block";
  })
);

const closeBtn = document.querySelector(".foto-modal .close");

closeBtn.addEventListener("click", function () {
  fotoModal.style.display = "none";
});
