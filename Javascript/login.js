// js 객체
let members = [
    { id: 'user01', pw: '1111', name: '권동익', responsibility: 'User' },
    { id: 'user02', pw: '2222', name: '호날두', responsibility: 'User' },
    { id: 'user03', pw: '3333', name: '관리자', responsibility: 'Admin' }
]

// 공유 localstorage -> 문자열이 된다.
let members_json = JSON.stringify(members);
// 회원정보
localStorage.setItem('members', members_json);

// login_form에 submit 등록
document.forms.login_form.addEventListener('submit', function (e) {
    e.preventDefault();
    let id_input = document.querySelector('input[name="user_id"]');
    let id = document.querySelector('input[name="user_id"]').value;
    let pw = document.querySelector('input[name="user_pw"]').value;
    // members의 저장값
    let members = JSON.parse(localStorage.getItem('members'));

    for (let i = 0; i < members.length; i++) {

        if (members[i].id == id && members[i].pw == pw) {

            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userID', members[i].id);

            Swal.fire({
                title: "로그인 성공",
                icon: "success",
                timer: 3000,
                draggable: true,
                confirmButtonColor: '#240a5e',
                confirmButtonText: '확인'

            }).then((result) => {
                window.location.href = 'index.html';
            });
            return;
        }
    }
    Swal.fire({
        title: "아이디와 비밀번호를 확인하세요.",
        icon: "error", // icon : error 추가
        timer: 3000,
        draggable: true,
        confirmButtonColor: '#240a5e',
        confirmButtonText: '확인'
    })
    id_input.focus();
});