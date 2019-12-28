const about = () => {
  const mainContainer = document.querySelector('#main-container');
  const content = document.createElement('div');
  content.classList.add('content-wrapper');
  const title = document.createElement('h3');
  title.textContent = 'About';
  const contentPara = document.createElement('p');
  contentPara.textContent = "I grew up in a middle class family in the Southern State of India, Kerala. Family circumstances kept me away from Film School and I Graduated from India’s Most Prestigious Hospitality Institution, Institute of Hotel Management Bhopal, India. Doesn’t matter what you do, but be good in what you do and enjoy doing it.  I spent time traveling India understanding its culinary and cultural fabric before taking flight to the United States. Spent time in New York and LA before deciding to settle in Vancouver, Worlds most coveted destination. Vancouver is evergreen, beautiful, with its vast waterfronts, inlets, lakes, parks, mountains, snow peaks, and shallow beaches and there’s something for everybody, all year round. The miner’s capital, is west coasts booming city is frequently ranked the best place to live on earth.";
  content.appendChild(title);
  content.appendChild(contentPara);
  mainContainer.append(content);
}

export default about;
