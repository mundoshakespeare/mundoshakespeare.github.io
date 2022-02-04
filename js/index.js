let inicioChat = document.getElementById('inicioChat');
let closeChat = document.querySelector('.button');


inicioChat.addEventListener('click', function(){
  document.querySelector('.avenue-messenger').style.display = "initial";
  document.querySelector('#inicioChat').style.display = "none";
  document.querySelector('.bubble2').style.visibility = "hidden";
});

closeChat.addEventListener('click', function(){
  document.querySelector('.avenue-messenger').style.display = "none";
  document.querySelector('#inicioChat').style.display = "initial";
  document.querySelector('.bubble2').style.visibility = "initial";
});
