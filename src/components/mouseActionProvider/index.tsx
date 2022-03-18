import { useEffect, useState } from 'react';
import '@/styles/mouseAction.scss';

function MouseActionProvider(props) {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const getMousePos = (e) => {
      const pX = e.pageX;
      const pY = e.pageY;
      setPosX(pX);
      setPosY(pY);
      setIsActive(false);
      if (
        e.target.classList.contains('anchor') ||
        e.target.tagName === 'BUTTON'
      )
        setIsActive(true);
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
          transform: `translate3d(${posX}px,${posY}px,0px)`,
        }}
      ></div>
      <div
        className="blur"
        style={{
          transform: `translate3d(${posX}px,${posY}px,0px)`,
        }}
      ></div>
      {props.children}
    </div>
  );
}

export default MouseActionProvider;
