import instagram from './assets/static/instagram.svg';

export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toGMTString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

export const getCookie = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const getCookieJson = (className) => {
  const json = JSON.parse(getCookie(className));
  return json;
};

export const setCookieJson = (className, value) => {
  const json = JSON.stringify(value);
  setCookie(className, json, 365);
};

export const setLocalStorageJson = (className, value) => {
  const json = JSON.stringify(value);
  localStorage.setItem(className, json);
};

export const getLocalStorageJson = (className) => {
  const json = JSON.parse(localStorage.getItem(className));
  return json;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export const animateCSS = (element, animationName, callback) => {
  const node = document.querySelector(element);
  const animationNames = animationName.split(' ');
  node.classList.add('animated');
  for (let i = 0; i < animationNames.length; i++) {
    node.classList.add(animationNames[i]);
  }
  const handleAnimationEnd = () => {
    node.classList.remove('animated');
    for (let i = 0; i < animationNames.length; i++) {
      node.classList.remove(animationNames[i]);
    }
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  };

  node.addEventListener('animationend', handleAnimationEnd);
};

export const vibrar = () => {
  window.navigator.vibrate(50);
};

export const showModal = (selector) => {
  const className = `.${selector || 'modal'}`;
  const modal = document.querySelector(className);
  if (modal.classList.contains('hidden')) {
    modal.classList.replace('hidden', 'flex');
    document.body.classList.toggle('overflow-hidden');
    animateCSS(className, 'fadeIn faster');
  } else {
    modal.classList.replace('flex', 'hidden');
    document.body.classList.toggle('overflow-hidden');
  }
  if (document.querySelector('.button-modal').hasAttribute('disabled')) {
    document.querySelector('.button-modal').removeAttribute('disabled');
  }
};

export const close = (className) => {
  let allClosed = getCookie('closed');
  allClosed = allClosed.split('|');
  animateCSS(className, 'flipOutX faster', () => {
    document.querySelector(className).classList.add('hidden');
  });
  allClosed.push(className);
  allClosed = allClosed.join('|');
  setCookie('closed', allClosed, 365);
};

export const peticion = (link) => {
  let authorization = getCookie('access_token');
  const miInit = { method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authorization,
    },
    credentials: 'same-origin',
  };
  return fetch(`https://altaprevia.herokuapp.com/${link}`, miInit)
    .then((res) => {
      authorization = res.headers.get('authorization');
      authorization = authorization.replace('Bearer', '');
      return res.json();
    })
    .catch((error) => {
      console.error(`Error ${link}:`, error);
      return 0;
    })
    .then((response) => {
      console.log(`Success created ${link}:`, response);
      if (!authorization || authorization === 'null') setCookie('access_token', authorization, 365);
      return response;
    });
};

export const getBase64Image = (img) => {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const dataURL = canvas.toDataURL('image/png');

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
};

export const svgBase64 = (img) => {
  const s = new XMLSerializer().serializeToString(img);
  return window.btoa(s);
};

export const addInstagram = (text) => {
  const img = document.createElement('img');
  const imgExist = document.querySelector('.img-instagram');
  const a = document.querySelector('.a-instagram');
  const parent = document.querySelector('.div-instagram');
  let paragraph = document.querySelector('.p-instagram');
  if (text) {
    if (parent.classList.contains('hidden')) {
      parent.classList.toggle('hidden');
    }

    if (paragraph) {
      paragraph.remove();
      if (imgExist) {
        imgExist.remove();
      }
    }
    img.src = instagram;
    img.alt = 'instagram';
    img.classList.add('img-instagram', 'object-contain', 'h-5', 'w-5', 'mr-2');
    paragraph = document.createElement('p');
    paragraph.classList.add('p-instagram');
    parent.appendChild(img);
    paragraph.appendChild(document.createTextNode(` ${text} `));
    parent.appendChild(paragraph);
    a.setAttribute('href', `https://www.instagram.com/${text}/`);
  } else {
    parent.classList.add('hidden');
  }
};

export const gameGeneric = (classList, json, numMath, numeroSwitch, lastMessage) => {
  const instagram = document.querySelector('.a-instagram');
  const parentP = document.querySelector(`.${classList}Body__parent-p`);
  const numAleatorio = Math.floor((Math.random() * numMath));
  let p = document.querySelector(`.${classList}Body-p`);
  let text;
  if (numeroSwitch[numAleatorio] !== undefined) {
    text = document.createTextNode(json[numeroSwitch[numAleatorio]].body);
    addInstagram(json[numeroSwitch[numAleatorio]].user.instagram);
  } else {
    text = document.createTextNode(lastMessage);
    addInstagram();
  }
  p.remove();
  p = document.createElement('p');
  p.classList.add(`${classList}Body-p`, 'animated', 'fadeIn', 'faster');
  p.appendChild(text);
  parentP.insertBefore(p, instagram);
  return numAleatorio;
};
