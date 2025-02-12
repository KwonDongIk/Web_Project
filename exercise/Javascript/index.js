// index.js
// localstorage 는 웹 브라우저에서 데이터를 영구적으로 저장할 수 있는 웹 스토리지 API


// js 객체
let members = [
  {id: 'user01', pw: '1111', name: '홍길동'},
  {id: 'user02', pw: '2222', name: '홍기동'},
  {id: 'user03', pw: '3333', name: '홍이동'}
]

// 공유 localstorage -> 문자열이 된다.
let members_json = JSON.stringify(members);
// 회원정보
localStorage.setItem('members', members_json);






// 연습
let name = 'Hongkildong';
localStorage.setItem('name', 'Hongkildong'); // 다른 페이지에서도 공유 가능함, 문자열로 담아야함
console.log(localStorage.getItem('name')); // 값 불러옴 -> 불러온걸로 활용해야한다.

// json 문자열
let json = `{"name": "Hongkildong", "age": 20}`
// 문자열 -> 객체
let obj = JSON.parse(json);
console.log(json, obj);
// obj.name, obj.age



// 문자열로 담아야 파싱해서 처리가능함, json 형태의 문자열로 담는다.
localStorage.setItem('friend', json);
let info = localStorage.getItem('friend');
console.log(JSON.parse(info)['age']); // json 문자열 가지고와서 파싱하면 js 객체로 활용가능함

localStorage.setItem('friend2', obj);
info = localStorage.getItem('friend2');
console.log(info.name);




// js 객체를 문자열로 변경
obj = {
  name: 'Hongkildong', 
  friends: [{name: '김민수', phone: '010-1111-2222'},
            {name: '박현수', phone: '010-1111-2223'}]}

json = JSON.stringify(obj); // 객체를 문자열로 변경
console.log(json);

localStorage.setItem('myFriend', json);