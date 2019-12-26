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
