import home from './tabs/home';
import location from './tabs/location';
import menu from './tabs/menu';
import about from './tabs/about';
import resetContent from './resetContent';
import setup from './setup';


setup();
home();

const TabManager = (function(){
  let lastActiveTab = 'home';
  const homeTab = document.querySelector('#home');
  const locationTab = document.querySelector('#location');
  const menuTab = document.querySelector('#menu');
  const aboutTab = document.querySelector('#about');
  const tabs = [homeTab, locationTab, menuTab, aboutTab];

  function _switchBtn(btnName){
    //if found current tab, set active, if found previous tab, remove active
    console.log(tabs);

    tabs.map(tab => {
      console.log(tab, ' ', tab.id);
      if(tab.id === btnName){
        tab.classList.add('active');
      }else if(tab.id === lastActiveTab){
        tab.classList.remove('active');
      }
    });
  }

  function _changeTab(btn){
    resetContent();

    switch (btn) {
      case 'home':
        home();
        _switchBtn(btn);
        lastActiveTab = 'home';
        break;
      case 'location':
        location();
        _switchBtn(btn);
        lastActiveTab = 'location';
        break;
      case 'menu':
        menu();
        _switchBtn(btn);
        lastActiveTab = 'menu';
        break;
      case 'about':
        about();
        _switchBtn(btn);
        lastActiveTab = 'about';
        break;
      default:
        throw new Error('Invalid changeTab argument.');
    }
  }

  function addEventListeners(){
    tabs.map(tab => {
      tab.addEventListener('click', (e) => {
        _changeTab(e.target.id);
      });
    })
  }

  return { addEventListeners };

})();

TabManager.addEventListeners();
