let prevCoords,
  currCoords,
  pivotCoords;
let bottleVector,
  swipeVector;
let isSwiping = false;

const getCoords = (e) => {
  const coords = {};

  switch (e.type) {
    case 'mouseup':
    case 'mousedown':
    case 'mousemove':
      coords.x = e.pageX;
      coords.y = e.pageY;
      break;
    case 'touchstart':
    case 'touchmove':
      coords.x = e.originalEvent.touches[0].pageX;
      coords.y = e.originalEvent.touches[0].pageY;
      break;
  }

  return coords;
};

const rotate = (el, deg) => {
  const angle = deg + 90;
  //const elX = el;
  //console.log(el);
  /*if (elX === '#bottle') {
    document.querySelector(elX).style.transform = rotate(`${angle}deg`);
    document.querySelector(elX).style.webkitTransform = rotate(`${angle}deg`);
  } else {
    elX.style.transform = rotate(`${angle}deg`);
    elX.style.webkitTransform = rotate(`${angle}deg`);
  }*/
  $(el).css({
    '-ms-transform': `rotate(${angle}deg)`,
    '-webkit-transform': `rotate(${angle}deg)`,
    'transform': `rotate(${angle}deg)`,
  });
};

const renderVector = (v, translate) => {
  // This function makes it easy for us to draw vectors to the screen

  // Create a new vector div (essentially a line)
  const div = document.createElement('div');
  div.classList.add('vector');

  // Set the position, angle and length of the line
  div.style.left = translate.x;
  div.style.top = translate.y;
  div.style.height = v.length();
  const a = v.angleDeg();
  rotate(div, a);

  document.body.appendChild(div);

  return div;
};

const render = () => {
  // Clear the display of any vectors
  $('body .vector').remove();

  if (swipeVector) renderVector(swipeVector, prevCoords);
  if (bottleVector) {
    renderVector(bottleVector, pivotCoords);
    rotate('#bottle', bottleVector.angleDeg() + 180);
  }

  // rotate bottle
  requestAnimationFrame(render);
};

const getWindowSize = (function () {
  const docEl = document.documentElement,
    IS_BODY_ACTING_ROOT = docEl && docEl.clientHeight === 0;

  // Used to feature test Opera returning wrong values
  // for documentElement.clientHeight.
  function isDocumentElementHeightOff() {
    const d = document,
      div = d.createElement('div');
    div.style.height = '2500px';
    d.body.insertBefore(div, d.body.firstChild);
    const r = d.documentElement.clientHeight > 2400;
    d.body.removeChild(div);
    return r;
  }

  if (typeof document.clientWidth === 'number') {
    return function () {
      return { width: document.clientWidth, height: document.clientHeight };
    };
  } if (IS_BODY_ACTING_ROOT || isDocumentElementHeightOff()) {
    const b = document.body;
    return function () {
      return { width: b.clientWidth, height: b.clientHeight };
    };
  }
  return function () {
    return { width: docEl.clientWidth, height: docEl.clientHeight };
  };
})();

const updatePivot = () => {
  //const pivot = document.getElementById('#pivot');
  //console.log(pivot);
  //const pivotStyle = pivot.style;
  pivotCoords = {
    x: getWindowSize().width / 2,
    y: getWindowSize().height / 2,
  };
  //pivotStyle.left = pivotCoords.x;
  //pivotStyle.top = pivotCoords.y;
  $('#pivot').css({
    left: pivotCoords.x,
    top: pivotCoords.y,
  });
};

$(window).on('mousedown touchstart', (e) => {
  e.stopPropagation();
  e.preventDefault();

  isSwiping = true;

  prevCoords = getCoords(e);
  currCoords = getCoords(e);
});

$(window).on('mouseup touchend', (e) => {
  e.stopPropagation();
  e.preventDefault();

  isSwiping = false;

  // calculate force at the point the user releases the bottle, then spin
  const torque = swipeVector.clone().cross(bottleVector);
  const angle = {
    prev: 0,
    target: torque * 0.075,
  };

  TweenLite.from(angle, 2, {
    target: 0,
    onUpdate() {
      const step = angle.target - angle.prev;
      bottleVector.rotateDeg(step);
      angle.prev = angle.target;
    },
    onComplete() {
      // Do stuff when bottle stops spinning
    },
  });
});

$(window).on('mousemove touchmove', (e) => {
  e.stopPropagation();
  e.preventDefault();

  if (!isSwiping) return;

  currCoords = getCoords(e);

  // Convert all our coordinates to vectors
  const currVector = new Victor(currCoords.x, currCoords.y);
  const prevVector = new Victor(prevCoords.x, prevCoords.y);
  const pivotVector = new Victor(pivotCoords.x, pivotCoords.y);
  swipeVector = currVector.clone().subtract(prevVector);

  // draw the vector of the bottle
  bottleVector = currVector.clone().subtract(pivotVector);
  bottleVector.norm().multiply(new Victor(200, 200)).invert();

  prevCoords = currCoords;
});

$(window).on('resize', (e) => {
  // update the pivot to the center of the screen
  updatePivot();
});

function init() {
  updatePivot();
  bottleVector = new Victor(200, 0); // set the initial state of the bottle
  //debugger;
  render();
}

window.onload = init;
