const carData = [
    {carCode : 'C001', brand : '기아' , carName : 'EV9', price : 45000, image : '/images/ev9.png'},
    {carCode : 'C002', brand : 'KGM', carName : '토레스 EV', price : 30000, image : '/images/torresev.png'},
    {carCode : 'C003', brand : '현대 제네시스', carName : 'GV80', price : 50000, image : '/images/genesis.png'}
  ];

localStorage.setItem('carData', JSON.stringify(carData));

const savedCarData = JSON.parse(localStorage.getItem('carData'));



carData.forEach(function (car){

    let str = `<div class="content">
            <div class="contentCar">
              <div class="car_info_container">
                <img src=${car.image} alt="">
                <div class="car_info">
                  <span>${car.brand}</span>
                  <span>${car.carName}</span>
                  <span class="car_info_price">${car.price} 원</span>
                </div>
              </div>
              <div class="btn">
                <button type="submit" class="register_btn">예약하기</button>
              </div>
            </div>
          </div>`
      let target = document.querySelector('.registerCar_section');
      target.insertAdjacentHTML('beforeend', str);
    


});