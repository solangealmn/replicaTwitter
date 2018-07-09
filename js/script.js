//postTweet pega o textarea pela id
var postTweet = document.getElementById('post-tweet');
//newTweet pega o botão pela id
var newTweet = document.getElementById('btn-tweet');

//escuta a ação de colocar texto dentro do textarea
postTweet.addEventListener('keyup', function() {
  //verifica se tem algum valor dentro de textarea
  if (postTweet.value.length > 0) {
    newTweet.disabled = false; //habilita o botão
  } else{
    newTweet.disabled = true; //desabilita o botão
  }
  var remening = document.getElementById('remening');
  var charlimit = 140; //contém o valor limite de caracteres
  var character = postTweet.value.split(''); //pega cada um dos caracteres digitados
  remening.innerText = charlimit - character.length; //insere a quantidade de caracteres dentro do p
});
//Escuta a ação de enviar um novo tweet.
newTweet.addEventListener('click', tweet);

function tweet() { //função tweet posta o comentário
  postTweet = document.getElementById('post-tweet').value;
  var commentParent = document.getElementById('comment-posted');
  var post = document.createElement('div'); //post cria uma div vazia
  post.classList = 'printed-tweet'; //adiciona uma class a div criada
  post.innerHTML = postTweet; //insere o valor de textarea dentro da div
  commentParent.appendChild(post);
  postTweet.value = ""; //limpa o textarea
  event.preventDefault();
}
