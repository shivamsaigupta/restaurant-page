const location = () => {
  const mainContainer = document.querySelector('#main-container');
  const content = document.createElement('div');
  content.classList.add('content-wrapper');
  const title = document.createElement('h3');
  title.textContent = 'Location';
  const contentPara = document.createElement('p');
  contentPara.textContent = "317 – 355 Burrard Street, Vancouver, British Columbia, Canada V6Z 1X6.";
  content.appendChild(title);
  content.appendChild(contentPara);
  mainContainer.append(content);
}

export default location;
