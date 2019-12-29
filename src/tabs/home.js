const home = () => {
  const mainContainer = document.querySelector('#main-container');
  const content = document.createElement('div');
  content.classList.add('content-wrapper');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container-large');
  imgContainer.innerHTML = "<img class='large' src='./imgs/food.jpg' alt='food' />";

  const contentPara = document.createElement('p');
  contentPara.textContent = "Enjoy the taste of Bombay right here in Vancouver Canada. Come join us at Gupta's Indian Restaurant!";
  content.appendChild(imgContainer);
  content.appendChild(contentPara);
  mainContainer.append(content);
}

export default home;
