const resetContent = () => {
  const mainContainer = document.querySelector('#main-container');
  const content = document.querySelector('.content-wrapper');
  mainContainer.removeChild(content);
}

export default resetContent;
