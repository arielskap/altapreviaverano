import React, { useEffect } from 'react';
import Victor from 'victor';
import { TweenLite } from 'gsap';
import vodka from '../assets/static/vodka.png';
import '../assets/styles/components/SpinBottle.scss';

const SpinBottle = ({ className }) => {
  let prevCoords,
    currCoords,
    pivotCoords;
  let bottleVector,
    swipeVector;
  let isSwiping = false;

  function getCoords(e) {
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
        if (e.originalEvent) {
          coords.x = e.originalEvent.touches[0].pageX;
          coords.y = e.originalEvent.touches[0].pageY;
        } else if (e) {
          coords.x = e.touches[0].pageX;
          coords.y = e.touches[0].pageY;
        }
        break;
    }

    return coords;
  }

  function rotate(el, deg) {
    const angle = deg + 90;
    const elX = el;
    if (elX === '#bottle') {
      document.querySelector(elX).style.transform = `rotate(${angle}deg)`;
      document.querySelector(elX).style.webkitTransform = `rotate(${angle}deg)`;
      document.querySelector(elX).style.msTransform = `rotate(${angle}deg)`;
    }
  }

  function render() {
    if (bottleVector) {
      rotate('#bottle', bottleVector.angleDeg() + 180);
    }

    // rotate bottle
    requestAnimationFrame(render);
  }

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

  function updatePivot() {
    pivotCoords = {
      x: getWindowSize().width / 2,
      y: getWindowSize().height / 2,
    };
    if (document.querySelector('#pivot')) {
      document.querySelector('#pivot').style.left = pivotCoords.x;
      document.querySelector('#pivot').style.top = pivotCoords.y;
    }
  }

  function init() {
    updatePivot();
    bottleVector = new Victor(200, 0); // set the initial state of the bottle
    render();
  }

  useEffect(() => {
    document.querySelector('.SpinBottle').addEventListener('mousedown', (e) => {
      e.stopPropagation();
      e.preventDefault();

      isSwiping = true;

      prevCoords = getCoords(e);
      currCoords = getCoords(e);
    });

    document.querySelector('.SpinBottle').addEventListener('touchstart', (e) => {
      e.stopPropagation();

      isSwiping = true;

      prevCoords = getCoords(e);
      currCoords = getCoords(e);
    });

    document.querySelector('.SpinBottle').addEventListener('mouseup', (e) => {
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

    document.querySelector('.SpinBottle').addEventListener('touchend', (e) => {
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

    document.querySelector('.SpinBottle').addEventListener('mousemove', (e) => {
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

    document.querySelector('.SpinBottle').addEventListener('touchmove', (e) => {
      e.stopPropagation();

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

    document.querySelector('.SpinBottle').addEventListener('resize', (e) => {
      updatePivot();
    });

    init();
  });

  return (
    <div className={`SpinBottle ${className}`}>
      <img id='bottle' src={vodka} alt='Vodka' />
    </div>
  );
};

export default SpinBottle;
