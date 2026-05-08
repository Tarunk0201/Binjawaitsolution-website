import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

const Counter = ({ to, className }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true });
  const numericTo = parseInt(to.replace(/[^0-9]/g, ""), 10);
  const suffix = to.replace(String(numericTo), "");

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(0, numericTo, {
        duration: 2,
        onUpdate(value) {
          node.textContent = Math.round(value);
        },
        onComplete() {
          node.textContent += suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericTo, suffix]);

  return (
    <span ref={nodeRef} className={className}>
      0
    </span>
  );
};

export default Counter;
