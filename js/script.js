//Pegar o botão pela id
var newTweet = document.getElementById('btn-tweet');
//Escuta a ação de enviar um novo tweet.
newTweet.addEventListener('click', tweet);
//função tweet guarda o valor de textarea, insere em uma div dentro do html
function tweet(){
  //postTweet contém o valor de textarea
  var postTweet = document.getElementById('post-tweet').value;
  //post cria uma div vazia
  var post = document.createElement('div');
  post.classList = 'printed-tweet';//adiciona uma class a div criada
  post.innerHTML = postTweet; //insere o valor de textarea dentro da div
  var commentParent = document.getElementById('comment-posted')
  commentParent.appendChild(post);
  event.preventDefault();
}
