const userInfo = document.querySelector('.userinfo');
const userName = document.getElementById('userName');
const loginLink = document.querySelector('.user_option a');
const welcomeMypage = document.getElementById('mypage_Name');

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

if (isLoggedIn === 'true' && userID){
  const members = JSON.parse(localStorage.getItem('members'));
  const user = members.find(member => member.id === userID);


    if (user){
      welcomeMypage.innerHTML = `<strong>${user.name}</strong> 님 안녕하세요!`;
    }
}

function myPage() {
  window.location.href = 'mypage.html';
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
    window.location.href = 'index.html';
  });
}
