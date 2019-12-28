const home = () => {
  const mainContainer = document.querySelector('#main-container');
  const content = document.createElement('div');
  content.classList.add('content-wrapper');
  const title = document.createElement('h3');
  title.textContent = 'Home';
  const contentPara = document.createElement('p');
  contentPara.textContent = "Enjoy the taste of Bombay right here in Vancouver Canada. Come join us at Gupta's Indian Restaurant!";
  content.appendChild(title);
  content.appendChild(contentPara);
  mainContainer.append(content);
}

export default home;
