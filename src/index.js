import home from './tabs/home';
import location from './tabs/location';
import menu from './tabs/menu';
import about from './tabs/about';
import resetContent from './resetContent';
import setup from './setup';

function changeTab(btn){
  resetContent();

  switch (btn) {
    case 'home':
      home();
      break;
    case 'location':
      location();
      break;
    case 'menu':
      menu();
      break;
    case 'about':
      about();
      break;
    default:
      throw new Error('Invalid changeTab argument.');
  }
}

function addEventListeners(){
  const home = document.querySelector('#home');
  const location = document.querySelector('#location');
  const menu = document.querySelector('#menu');
  const about = document.querySelector('#about');

  let tabs = [home, location, menu, about];

  tabs.map(tab => {
    tab.addEventListener('click', (e) => changeTab(e.target.id));
  })

}

function render(){

}

setup();
home();
addEventListeners();
