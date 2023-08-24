import React, { useEffect } from 'react';

const OpeningAnimation = () => {
  const detectSpaceKey = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      showTime();
    }
  };

  const showTime = () => {
    var curtain = document.getElementById("curtain");
    curtain.className = "open";

    var scene = document.getElementById("scene");
    scene.className = "expand";

    var starter = document.getElementById("starter");
    starter.className = "fade-out";

    setTimeout(function () {
      starter.style.display = 'none';
    }, 2000);
  };

  useEffect(() => {
    document.body.addEventListener('load', showTime);
    document.addEventListener('keydown', detectSpaceKey);

    return () => {
      document.body.removeEventListener('load', showTime);
      document.removeEventListener('keydown', detectSpaceKey);
    };
  }, []);

};

export default OpeningAnimation;
