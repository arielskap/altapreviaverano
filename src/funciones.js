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
  setCookie('closed', allClosed);
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
  fetch(`https://altaprevia.herokuapp.com/${link}`, miInit)
    .then((res) => {
      authorization = res.headers.get('authorization');
      authorization = authorization.replace('Bearer', '');
      return res.json();
    })
    .catch((error) => {
      console.error(`Error ${link}:`, error);
    })
    .then((response) => {
      console.log(`Success created ${link}:`, response);
      if (!authorization || authorization === 'null') setCookie('access_token', authorization, 365);
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
