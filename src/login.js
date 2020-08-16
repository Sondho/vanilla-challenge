const main = document.querySelector(".main"),
  userIdForm = document.querySelector("header form"),
  userIdInput = document.querySelector("input"),
  userId = document.querySelector(".userId");

const USER_ID = "userId";
const SHOWING = "showing";

function logout(event) {
  userId.innerHTML = "";
  userId.title = "";
  localStorage.removeItem(USER_ID);
  askForName();
}

function handleUserIdSubmit(event) {
  event.preventDefault();
  const currentId = userIdInput.value;
  paintMain(currentId);
  localStorage.setItem(USER_ID, userIdInput.value);
}

// main을 보이지 않게 하고, input 이벤트를 호출
function askForName() {
  main.classList.remove(SHOWING);
  userIdForm.classList.add(SHOWING);
  userIdForm.addEventListener("submit", handleUserIdSubmit);
}

function paintMain(currentId) {
  userIdForm.classList.remove(SHOWING);
  main.classList.add(SHOWING);
  userId.innerHTML = `<font color="black"><u>${currentId}</u></font>님, 환영합니다.`;
  userId.title = "더블 클릭 시 로그아웃됩니다.";
}

// Local Storgae에 있는 userId의 값을 가져옴
function loadId() {
  const currentId = localStorage.getItem(USER_ID);
  // Local Staroge에 userId의 값을 확인
  if (currentId !== null) {
    paintMain(currentId);
  } else {
    askForName();
  }
}

function init() {
  loadId();
  userId.addEventListener("dblclick", logout);
}
init();
