const about = () => {
  const mainContainer = document.querySelector('#main-container');
  const content = document.createElement('div');

  content.classList.add('content-wrapper');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container-small');
  imgContainer.innerHTML = "<img class='small' src='./imgs/rohit.jpg' alt='Rohit' />";

  const contentPara = document.createElement('p');
  contentPara.textContent = "I grew up in a middle class family in the Southern State of India, Kerala. Doesn’t matter what you do, but be good in what you do and enjoy doing it.  I spent time traveling India understanding its culinary and cultural fabric before taking flight to the United States. Spent time in Beverly Hills and LA before deciding to settle in Vancouver, Worlds most coveted destination. Vancouver is evergreen, beautiful, with its vast waterfronts, inlets, lakes, parks, mountains, snow peaks, and shallow beaches and there’s something for everybody, all year round. The miner’s capital, is west coasts booming city is frequently ranked the best place to live on earth.";
  content.appendChild(imgContainer);
  content.appendChild(contentPara);
  mainContainer.append(content);
}

export default about;
