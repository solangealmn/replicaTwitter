window.addEventListener('load',function(){
  document.getElementById("btn-tweet").disabled = true; //desabilita o botão
  document.getElementById("btn-tweet").classList.add('add-opacity');//coloca a opacidade do botão
});
document.getElementById("post-tweet").addEventListener("keyup", buttonOff, false);
document.getElementById("post-tweet").addEventListener("keypress", buttonOff, false);
document.getElementById("post-tweet").addEventListener("keydown", buttonOff, false);

function buttonOff() {
	//verifica se tem algum valor dentro de textarea
  if (document.getElementById("post-tweet").value.length <= 0 || document.getElementById("post-tweet").value === "" || document.getElementById("post-tweet").value.length > 140) {
    document.getElementById("btn-tweet").disabled = true; //desabilita o botão
    document.getElementById("btn-tweet").classList.add('add-opacity');//coloca a opacidade do botão
  } else {
    document.getElementById("btn-tweet").disabled = false; //habilita o botão
    document.getElementById("btn-tweet").classList.remove('add-opacity');//remove a opacidade do botão
  }
}
//limpar o textarea depois de cada tweet
function clear() {
  document.getElementById("post-tweet").value = "";
  document.getElementById("btn-tweet").disabled = true; //desabilita o botão
  document.getElementById("btn-tweet").classList.add('add-opacity');//remove a opacidade do botão
}
document.getElementById("post-tweet").addEventListener("keydown", counter);
function counter() {
  var charlimit = 140; //contém o valor limite de caracteres
  var tweet = document.getElementById("post-tweet").value;
  var charSize = charlimit - tweet.length;
  document.getElementById("remening").innerHTML = charSize;
  if(document.getElementById("post-tweet").value.length == 140){
    document.getElementById("remening").style.color = "#657786";
  }
  if(document.getElementById("post-tweet").value.length >= 120){
    document.getElementById("remening").style.color = "#FFD700";
  }
  if(document.getElementById("post-tweet").value.length >= 130){
    document.getElementById("remening").style.color = "#D2691E";
  }
  if(document.getElementById("post-tweet").value.length >= 140){
    document.getElementById("remening").style.color = "#B22222";
  }
}
//Escuta a ação de enviar um novo tweet.
document.getElementById("btn-tweet").addEventListener('click', tweet);

function tweet() { //função tweet posta o comentário
  buttonOff();
  var postTweet = document.getElementById('post-tweet').value;
  var commentParent = document.getElementById('comment-posted');
  var post = document.createElement('div'); //post cria uma div vazia
  post.classList = 'printed-tweet'; //adiciona uma class a div criada
  post.innerHTML = postTweet; //insere o valor de textarea dentro da div
  commentParent.appendChild(post);
  event.preventDefault();
  clear();//limpa o textarea
}





// //postTweet pega o textarea pela id
// var postTweet = document.getElementById('post-tweet');
// //newTweet pega o botão pela id
// var newTweet = document.getElementById('btn-tweet');
//
// //escuta a ação de colocar texto dentro do textarea
// postTweet.addEventListener('keyup', function typeOnField() {
//   postTweet.value;
//   postTweet.length;
//   //verifica se tem algum valor dentro de textarea
//   if (postTweet.value.length < 0 || postTweet.value == '' || postTweet.value.length > 140) {
//     newTweet.disabled = true; //desabilita o botão
//     newTweet.classList.add('add-opacity');//coloca a opacidade do botão
//   } else {
//     newTweet.disabled = false; //habilita o botão
//     newTweet.classList.remove('add-opacity');//remove a opacidade do botão
//   }
// });
// postTweet.addEventListener('keydown', function counter() {
//   postTweet.value;
//   postTweet.length;
//   var remening = document.getElementById('remening');
//   var charlimit = 140; //contém o valor limite de caracteres
//   var character = postTweet;
//   character.split(''); //pega cada um dos caracteres digitados
//   remening.innerText = charlimit - character.length; //insere a quantidade de caracteres dentro do p
//   if(postTweet.value.length > 120){
//     postTweet.style.color = "#FF8C00";
//   }
//   if(postTweet.value.length > 130){
//     postTweet.style.color = "#FF6347";
//   }
//   if(postTweet.value.length > 140){
//     postTweet.style.color = "#DC143C";
//   }
// });
