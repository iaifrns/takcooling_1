import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


 const Counter = ({ target ,text}:{target:number;text:string}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = target;
      const speed = 20; // vitesse du décompte (ms)

      const counter = setInterval(() => {
        start += 1;
        setCount(start);

        if (start === end) clearInterval(counter);
      }, speed);
    }
  }, [inView, target]);

  return (
    <p ref={ref} className="text-[20px] md:text-[50px] lg:text-[70px] font-bold text-gray-400 font-[Poppins] border-b-2 border-b-gray-500">{count}{text}</p>
  );
};
export default Counter