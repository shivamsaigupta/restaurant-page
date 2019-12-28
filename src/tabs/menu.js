const menu = () => {
  const mainContainer = document.querySelector('#main-container');
  const content = document.createElement('div');
  content.classList.add('content-wrapper');
  const title = document.createElement('h3');
  title.textContent = 'Menu';
  const contentPara = document.createElement('p');
  contentPara.innerHTML = "<ul><li>Salt and Roti: $70</li><li>Dal and Roti: $85</li><li>Rice and Salty Water: $99</li></ul>";
  content.appendChild(title);
  content.appendChild(contentPara);
  mainContainer.append(content);
}

export default menu;
