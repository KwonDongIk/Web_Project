// product.js
// element.insertAdjacentHTML('beforebegin / afterbegin / beforeend / afterend', 'html'))
// <span></span><div></div>
let productData = JSON.parse(localStorage.getItem('productData'));

// 상품갯수만큼 반복생성
productData.forEach(function (product) {

      let str = `<!-- col -->
              <div class="col">
                <div class="product-item">
                  ${product.sale == 0 ? '' : `<span class="badge bg-success position-absolute m-3">-${product.sale}%</span>`}
                  <a href="#" class="btn-wishlist"><svg width="24" height="24">
                      <use xlink:href="#heart"></use>
                    </svg></a>
                  <figure>
                    <a href="index.html" title="Product Title">
                      <img src=${product.image} class="tab-image">
                    </a>
                  </figure>
                  <h3>${product.prodName}</h3>
                  <span class="qty">1 Unit</span><span class="rating"><svg width="24" height="24" class="text-primary">
                      <use xlink:href="#star-solid"></use>
                    </svg> ${product.likeIt} </span>
                  <span class="price"> ₩${product.price} </span>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="input-group product-qty">
                      <span class="input-group-btn">
                        <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                          <svg width="16" height="16">
                            <use xlink:href="#minus"></use>
                          </svg>
                        </button>
                      </span>
                      <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1">
                      <span class="input-group-btn">
                        <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus">
                          <svg width="16" height="16">
                            <use xlink:href="#plus"></use>
                          </svg>
                        </button>
                      </span>
                    </div>
                    <a href="#" class="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart"></a>
                  </div> <!-- d-flex -->
                </div>
              </div> <!-- col -->`;
      let target = document.querySelector('div.product-grid');
      target.insertAdjacentHTML('beforeend', str);
}); // foreach


(function($) {

  "use strict";

  var initPreloader = function() {
    $(document).ready(function($) {
    var Body = $('body');
        Body.addClass('preloader-site');
    });
    $(window).load(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
  }

  // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}

  var initSwiper = function() {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });

    var brand_swiper = new Swiper(".brand-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".brand-carousel-next",
        prevEl: ".brand-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      }
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });
  }

  var initProductQty = function(){

    $('.product-qty').each(function(){

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          if(quantity>0){
            $el_product.find('#quantity').val(quantity - 1);
          }
      });

    });

  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  // document ready
  $(document).ready(function() {
    
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();

  }); // End of a document

})(jQuery);