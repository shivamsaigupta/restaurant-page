const location = () => {
  const mainContainer = document.querySelector('#main-container');
  const content = document.createElement('div');
  content.classList.add('content-wrapper');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container-large');
  imgContainer.innerHTML = "<img class='large' src='./imgs/location.jpg' alt='Location' />";

  const contentPara = document.createElement('p');
  contentPara.textContent = "317 – 355 Burrard Street, Vancouver, British Columbia, Canada V6Z 1X6.";
  content.appendChild(imgContainer);
  content.appendChild(contentPara);
  mainContainer.append(content);
}

export default location;
