// 현재 날짜 가져오기
function formatDate(date) {
  return date.toISOString().split('T')[0];  // YYYY-MM-DD 형식으로 변환
}

// 날짜에 일수를 더하는 함수
function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// 현재 날짜 설정
let today = new Date(); 
let returnDate = addDays(today, 7);  // 7일 후

// input에 날짜 설정
document.getElementById('rentalDate').value = formatDate(today);
document.getElementById('returnDate').value = formatDate(returnDate);
///////////////////////////////////////////////////////////////////////////////////////////////////////

const links = document.querySelectorAll('#myNav .overlay-content a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    // href 값 가져오기
    const href = this.getAttribute('href');
    
    // 로그인 페이지 링크는 체크하지 않음
    if (href === 'login.html') {
      return;
    }

    if (localStorage.getItem('isLoggedIn') !== 'true') {
      e.preventDefault();
      
      Swal.fire({
        title: "로그인이 필요합니다.",
        text: "로그인 페이지로 이동합니다.",
        icon: "warning",
        timer: 3000,
        draggable: true,
        confirmButtonColor: '#240a5e',
        confirmButtonText: '확인'
      }).then((result) => {
        window.location.href = 'login.html';
      });
    }
  });
});


document.getElementById('searchButton').addEventListener('click', function(e) {

  e.preventDefault();

  if(localStorage.getItem('isLoggedIn') !== 'true') {

    Swal.fire({
      title: "로그인이 필요합니다.",
      text: "로그인 페이지로 이동합니다.",
      icon: "warning",
      timer: 3000,
      draggable: true,
      confirmButtonColor: '#240a5e',
      confirmButtonText: '확인'

    }).then((result) => {
      window.location.href = 'login.html';
    });
    return;
  }

  // 대여, 반납 장소 선택 확인
  const pickupLocation = document.querySelectorAll('.book_section select')[0].value;
  const returnLocation = document.querySelectorAll('.book_section select')[1].value;

  // 장소 선택
  if (pickupLocation === '대여 장소 선택' || returnLocation === '반납 장소 선택') {
    Swal.fire({
      title: "장소를 선택해주세요",
      text: "대여 장소와 반납 장소를 선택해주세요.",
      icon: "warning",
      confirmButtonColor: '#240a5e',
      confirmButtonText: '확인'
    });
    return;
  }

  // 이동
  window.location.href = 'registerCar.html';
});


const userInfo = document.querySelector('.userinfo');
const userName = document.getElementById('userName');
const loginLink = document.querySelector('.user_option a');

const isLoggedIn = localStorage.getItem('isLoggedIn');
const userID = localStorage.getItem('userID');

if (isLoggedIn === 'true' && userID){
  const members = JSON.parse(localStorage.getItem('members'));
  const user = members.find(member => member.id === userID);


    if (user){
      userInfo.style.display = 'inline-block';
      userName.textContent = `안녕하세요. ${user.name} 님`;
      loginLink.style.display = 'none';
    } else {
      userInfo.style.display = 'none';
      loginLink.style.display = 'block';
    }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userID');
  
  let members = [
    {id: 'user01', pw: '1111', name: '권동익', responsibility : 'User'},
    {id: 'user02', pw: '2222', name: '호날두', responsibility : 'User'},
    {id: 'user03', pw: '3333', name: '관리자', responsibility : 'Admin'}
  ];
  localStorage.setItem('members', JSON.stringify(members));
  
  Swal.fire({
    title: "로그아웃 되었습니다.",
    icon: "success",
    timer: 3000,
    draggable: true,
    confirmButtonColor: '#240a5e',
    confirmButtonText: '확인'
  }).then((result) => {
    window.location.reload();
  });
}



