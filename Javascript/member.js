// member.js
// localStorage에서 members 정보

let members = [];
members = JSON.parse(localStorage.getItem('members'));
console.log(members);

// members의 값을 활용해서 tbody 영역에 들어갈 html 작성
members.forEach(function(elem, idx, ary) {
  

  document.querySelector('#list').innerHTML += makeRow(elem);

});


// id, pw, name 속성을 활용해서 tr>td*3을 만들어주는 함수
function makeRow(item = {}){

  let str = ''; // tr>td*3
  str += '<tr>';
  for(let prop in item){
    str += '<td>'+item[prop]+'</td>';
  }
  str += '</tr>';
  return str; // 생성된 tr>td*3 반환
}


// form.submit 이벤트
document.forms.addMember.addEventListener('submit', function (e) {

  e.preventDefault(); // submit 차단

  let id = document.querySelector('input[name="user_id"]').value;
  let pw = document.querySelector('input[name="user_pw"]').value;
  let name = document.querySelector('input[name="user_name"]').value;

  let newItem = makeRow({id, pw, name}); // ({id:id, pw:pw, name:name})
  document.querySelector('#list').innerHTML += newItem;

  // localStorage에 저장
  members.push(({id, pw, name}));
  localStorage.setItem('members', JSON.stringify(members)); // localStorage에 저장 시 문자열로 담기


})