import { useEffect, useState } from 'react';
import '@/styles/mouseAction.scss';

interface Pointer {
  x: number;
  y: number;
}

function MouseActionProvider(props) {
  const [mPos, setMPos] = useState<Pointer>({ x: 0, y: 0 });
  const [bPos, setBPos] = useState<Pointer>({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isBlur, setIsBlur] = useState(true);
  useEffect(() => {
    const getMousePos = (e) => {
      if (e.target.tagName === 'HTML') return;
      const pX = e.pageX;
      const pY = e.pageY;
      setMPos({ x: pX, y: pY });
      setIsActive(false);
      setIsBlur(false);
      let isCenter = false;
      let el = null;
      if (
        e.target.classList.contains('center') ||
        (e.target.parentNode &&
          e.target.parentNode.classList.contains('center'))
      ) {
        isCenter = true;
      }
      if (
        e.target.classList.contains('anchor') ||
        e.target.tagName === 'BUTTON'
      ) {
        setIsActive(true);
      }
      if (e.target.classList.contains('blur')) el = e.target;
      if (e.target.parentNode && e.target.parentNode.classList.contains('blur'))
        el = e.target.parentNode;
      if (el) {
        if (isCenter) {
          setBPos({
            x:
              el.getBoundingClientRect().x +
              el.getBoundingClientRect().width / 2 -
              150,
            y:
              el.getBoundingClientRect().y +
              el.getBoundingClientRect().height / 2 +
              window.scrollY -
              150,
          });
        } else {
          setBPos({
            x: el.getBoundingClientRect().x - 150,
            y: el.getBoundingClientRect().y - 150 + window.scrollY,
          });
        }
        setIsBlur(true);
      }
    };
    document.addEventListener('mousemove', getMousePos);
    return function cleanup() {
      document.removeEventListener('mousemove', getMousePos);
    };
  });

  return (
    <div>
      <div
        className={`pos ${isActive && 'pos-active'}`}
        style={{
          transform: `translate3d(${mPos.x}px,${mPos.y}px,0px)`,
        }}
      ></div>
      <div
        className={`blur-content ${isBlur && 'blur-content-active'}`}
        style={{
          transform: `translate3d(${bPos.x}px,${bPos.y}px,0px)`,
        }}
      ></div>
      {props.children}
    </div>
  );
}

export default MouseActionProvider;
