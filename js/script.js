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
//escuta as a ação de digitar
document.getElementById("post-tweet").addEventListener("keydown", counter);
//conta os caracteres digitados
function counter() {
  var charlimit = 140; //contém o valor limite de caracteres
  var tweet = document.getElementById("post-tweet").value;
  var charSize = charlimit - tweet.length;
  document.getElementById("remening").innerHTML = charSize;
  //formata o cor do contador de acordo com a quantidade de caracteres digitados
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
document.getElementById("post-tweet").addEventListener("keypress", fieldSize);
function fieldSize() {
  if(document.getElementById("post-tweet").scrollTop != 0){ //se a quantidade de pixels rolados no textarea não for 0 então:
      //a altura do textarea será igual a quantidade de pixels rolados
      document.getElementById("post-tweet").style.height = document.getElementById("post-tweet").scrollHeight + "px";
  }
}
//Escuta a ação de enviar um novo tweet.
document.getElementById("btn-tweet").addEventListener('click', tweet);

function tweet() { //função tweet posta o comentário
  buttonOff();
  var postTweet = document.getElementById('post-tweet').value;
  var commentParent = document.getElementById('comment-posted');
  var post = document.createElement('div'); //post cria uma div vazia
  var printedTweet = document.getElementsByClassName('printed-tweet');
  var tweetDate = document.createElement("p");
  post.classList.add('printed-tweet'); //adiciona uma class a div criada
  post.innerHTML = postTweet; //insere o valor de textarea dentro da div
  tweetDate.classList.add('p-date');
  tweetDate.innerHTML = moment().locale('pt-BR').subtract(6, 'days').calendar(); 
  commentParent.appendChild(post);
  post.appendChild(tweetDate);
  event.preventDefault();
  clear();//limpa o textarea
  document.getElementById("remening").textContent = 140;
  document.getElementById("remening").style.color = "#657786";
  document.getElementById("post-tweet").scrollHeight = 0;
}
