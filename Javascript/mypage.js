function displayReservations(){
    const lentBox = document.querySelector('.lent_box');
    const userID = localStorage.getItem('userID');
    const reservations = JSON.parse(localStorage.getItem('reservations'))||[];
    const carData = JSON.parse(localStorage.getItem('carData'));


    const userReservations = reservations.filter(res => res.userID === userID);

    if(userReservations.length > 0){
        lentBox.innerHTML='';
        userReservations.forEach(reser => {
            const car = carData.find(car => car.carCode === reser.carCode);

            if (car) {
                const reservationHTML = `
                <div class = "reservation_item">
                    <div class = "car_info">
                        <img src="${car.image}" alt="${car.carName}" style="width: 200px;">
                        <div class="car-details">
                            <h4>${car.brand}</h4>
                            <h5>${car.carName}</h5>
                            <p>가격: ${car.price}원/일</p>
                        </div>
                    </div>
                </div>`;
                lentBox.insertAdjacentHTML('beforeend', reservationHTML);
            }
            
        });
    } else {
        lentBox.innerHTML = `
        <h4>예약내역이 없어요</h4>
        <h6>렌터카 예약하기</h6>`;
    }
}

document.addEventListener('DOMContentLoaded', displayReservations);