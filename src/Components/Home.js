import { signoutPage } from '../lib/Auth.js';

/* eslint-disable space-before-blocks */
export function home(){
  // Father container
  const fatherOfAll = document.createElement('div');
  fatherOfAll.setAttribute('class', 'fatherOfAll-feed');
  const background = document.createElement('img');
  background.setAttribute('class', 'background-feed');
  background.src = '../img/background.jpg';
  // Header
  const headerFeed = document.createElement('header');
  headerFeed.setAttribute('class', 'header-feed');
  // IMG LOGO GYM
  const logoGym = document.createElement('img');
  logoGym.setAttribute('class', 'logogym-feed');
  logoGym.src = '../img/logo.png';
  // Create logout icon
  const logOut = document.createElement('img');
  logOut.src = '../img/power-off.png';
  logOut.setAttribute('class', 'log-out');
  headerFeed.append(logoGym, logOut);
  // Creates main
  const mainContainer = document.createElement('main');
  mainContainer.setAttribute('class', 'main-feed');
 /* // IMG background*/
  
  // container Hello
  const containerHello = document.createElement('div');
  containerHello.setAttribute('class', 'containerhello-div');
  // Create Div feed tittle and icon
  const helloDiv = document.createElement('div');
  helloDiv.setAttribute('class', 'hello-div');
  // Create text for home view
  const welcomeTxt = document.createElement('div');
  welcomeTxt.textContent = 'Hello';
  welcomeTxt.setAttribute('class', 'feed-title');
  // IMG icon
  const iconGym = document.createElement('img');
  iconGym.setAttribute('class', 'icon-feed');
  iconGym.src = '../img/icon.png';
  // Text
  const questionText = document.createElement('div');
  questionText.setAttribute('class', 'question-feed');
  questionText.textContent = 'What´s going on?';
  helloDiv.append(welcomeTxt, iconGym);
  containerHello.append(helloDiv, questionText);
  // Div new Post
  const postDiv = document.createElement('div');
  postDiv.setAttribute('class', 'post-feed');
  // Div input
  const inputDiv = document.createElement('div');
  inputDiv.setAttribute('class', 'input-feed');
  // Img input
  const inputImg = document.createElement('img');
  inputImg.src = '../img/user-img.png';
  inputImg.setAttribute('class', 'userimg-feed');
  // input
  const createPost = document.createElement('input');
  createPost.setAttribute('type', 'text');
  createPost.setAttribute('placeholder', 'Ask to your partner...');
  createPost.setAttribute('class', 'newpost-feed');
  // icon
  const writeIcon = document.createElement('img');
  writeIcon.src = '../img/write-icon.png';
  writeIcon.setAttribute('class', 'writeicon-feed');
  inputDiv.append(inputImg, createPost, writeIcon);
  // Container button
  const containerButton = document.createElement('div');
  containerButton.setAttribute('class', 'containerbutton-feed');
  // share button
  const shareButton = document.createElement('button');
  shareButton.setAttribute('class', 'sharebutton-feed');
  shareButton.textContent = 'share';
  containerButton.appendChild(shareButton);
  postDiv.append(inputDiv, containerButton);

  mainContainer.append(containerHello, postDiv);
  fatherOfAll.append(background, headerFeed, mainContainer);
  logOut.addEventListener('click', () => {
    signoutPage().then(() => {
      // Sign-out successful.
      console.log('si cerro');
    }).catch((error) => {
      // An error happened.
    });
  });
  return fatherOfAll;
}
