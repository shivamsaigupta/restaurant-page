const menu = () => {
  const mainContainer = document.querySelector('#main-container');
  const content = document.createElement('div');
  content.classList.add('content-wrapper');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container-small');
  imgContainer.innerHTML = "<img class='small' src='./imgs/menu.jpg' alt='Menu' />";

  const contentPara = document.createElement('p');
  contentPara.innerHTML = "<ul><li>Salt and Roti: $70</li><li>Dal and Roti: $85</li><li>Rice and Salty Water: $99</li></ul>";
  content.appendChild(imgContainer);
  content.appendChild(contentPara);
  mainContainer.append(content);
}

export default menu;
