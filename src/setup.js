const setup = () => {
  const mainContainer = document.querySelector('#main-container');
  const header = document.createElement('header');
  const title = document.createElement('h2');
  title.textContent = "Gupta's Luxurious Indian Restaurant";
  header.appendChild(title);


  const tabs = document.createElement('ul');
  tabs.classList.add('tabs');
  tabs.innerHTML = "<li id='home' class='active'>Home</li> <li id='menu'>Menu</li> <li id='location'>Location</li> <li id='about'>About</li>";
  header.appendChild(tabs);

  mainContainer.append(header);
}

export default setup;
