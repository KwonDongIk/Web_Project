// const carData = [
//   { carCode: 'C001', brand: '현대자동차', carName: '소나타 디엣지', price: 29500, image: 'images/car/sonata.png' },
//   { carCode: 'C002', brand: '기아', carName: 'EV9', price: 45000, image: 'images/car/ev9.png' },
//   { carCode: 'C003', brand: 'KGM', carName: '토레스 EV', price: 30000, image: 'images/car/torresev.png' },
//   { carCode: 'C004', brand: '현대 제네시스', carName: 'GV80', price: 50000, image: 'images/car/genesis_blue.png' }
// ];

// localStorage.setItem('carData', JSON.stringify(carData));

// const registerCarSection = document.querySelector('.registerCar_section');

// if (registerCarSection){

//   registerCarSection.innerHTML = '';


//   carData.forEach(function (car) {

//     let str = `<div class="contentCar">
//                 <div class="car_info_container">
//                   <img src=${car.image} alt="">
//                   <div class="car_info">
//                     <span>${car.brand}</span>
//                     <span>${car.carName}</span>
//                     <span class="car_info_price">${car.price} 원</span>
//                   </div>
//                 </div>
//                 <div class="btn">
//                   <button type="submit" class="register_btn">예약하기</button>
//                 </div>
//               </div>`
              
//     registerCarSection.insertAdjacentHTML('beforeend', str);
//   });
// }




// const isLoggedIn = localStorage.getItem('isLoggedIn');
// const userID = localStorage.getItem('userID');

// registerCarSection.addEventListener('click', function(e){

//   if(e.target.classList.contains('register_btn')){
//   e.preventDefault();

//   // 현재 선택된 차량 정보 가져오기
//   const carInfoContainer = e.target.closest('.contentCar');
//   const carBrand = carInfoContainer.querySelector('.car_info span:nth-child(1)').textContent;
//   const carName = carInfoContainer.querySelector('.car_info span:nth-child(2)').textContent;
  
//   // 차량 코드 찾기
//   const selectedCar = carData.find(car => car.brand === carBrand && car.carName === carName);
  
//   if (selectedCar) {
//     // 예약 정보 생성
//     const reservation = {
//       userID: userID,
//       carCode: selectedCar.carCode,
//       reservationDate: new Date().toISOString()
//     };

//     // 기존 예약 정보 가져오기
//     const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
//     reservations.push(reservation);
    
//     // 예약 정보 저장
//     localStorage.setItem('reservations', JSON.stringify(reservations));

//     Swal.fire({
//       title: "예약이 완료되었습니다",
//       text: "마이페이지에서 예약 내역을 확인할 수 있습니다",
//       icon: "success",
//       confirmButtonColor: '#240a5e',
//       confirmButtonText: '확인'
//     }).then((result) => {
//       window.location.href = 'mypage.html';
//     });
//   }
// }
// });


document.addEventListener('DOMContentLoaded', function() {
  const carData = [
      { carCode: 'C001', brand: '현대자동차', carName: '소나타 디엣지', price: 29500, image: '/images/car/sonata.png' },
      { carCode: 'C002', brand: '기아', carName: 'EV9', price: 45000, image: '/images/car/ev9.png' },
      { carCode: 'C003', brand: 'KGM', carName: '토레스 EV', price: 30000, image: '/images/car/torresev.png' },
      { carCode: 'C004', brand: '현대 제네시스', carName: 'GV80', price: 50000, image: '/images/car/genesis_blue.png' }
  ];

  const registerCarSection = document.querySelector('.registerCar_section');
  
  if (registerCarSection) {
      // 차량 목록 표시
      carData.forEach(car => {
          const carElement = `
              <div class="contentCar">
                  <div class="car_info_container">
                      <img src="${car.image}" alt="${car.carName}">
                      <div class="car_info">
                          <span>${car.brand}</span>
                          <span>${car.carName}</span>
                          <span class="car_info_price">${car.price.toLocaleString()} 원</span>
                      </div>
                  </div>
                  <div class="btn">
                      <button type="submit" class="register_btn">예약하기</button>
                  </div>
              </div>
          `;
          registerCarSection.insertAdjacentHTML('beforeend', carElement);
      });

      // 예약 버튼 클릭 이벤트
      registerCarSection.addEventListener('click', function(e) {
          if (e.target.classList.contains('register_btn')) {
              e.preventDefault();
              
              if (!localStorage.getItem('isLoggedIn')) {
                  Swal.fire({
                      title: "로그인이 필요합니다",
                      icon: "warning",
                      confirmButtonColor: '#240a5e',
                      confirmButtonText: '확인'
                  }).then(() => {
                      window.location.href = 'login.html';
                  });
                  return;
              }

              const carInfoContainer = e.target.closest('.contentCar');
              const carBrand = carInfoContainer.querySelector('.car_info span:nth-child(1)').textContent;
              const carName = carInfoContainer.querySelector('.car_info span:nth-child(2)').textContent;
              
              const selectedCar = carData.find(car => car.brand === carBrand && car.carName === carName);
              
              if (selectedCar) {
                  const reservation = {
                      userID: localStorage.getItem('userID'),
                      carCode: selectedCar.carCode,
                      reservationDate: new Date().toISOString()
                  };

                  const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
                  reservations.push(reservation);
                  localStorage.setItem('reservations', JSON.stringify(reservations));
                  localStorage.setItem('carData', JSON.stringify(carData));

                  Swal.fire({
                      title: "예약이 완료되었습니다",
                      text: "마이페이지에서 예약 내역을 확인할 수 있습니다",
                      icon: "success",
                      confirmButtonColor: '#240a5e',
                      confirmButtonText: '확인'
                  }).then(() => {
                      window.location.href = 'mypage.html';
                  });
              }
          }
      });
  }
});