import React, { useEffect } from "react";

function EmptySlot({ onAppear }) {
  useEffect(() => {
    const seconds = Math.random() * 3000; // random time up to 3 seconds
    const timer = setTimeout(onAppear, seconds);

    return () => clearTimeout(timer);
  }, [onAppear]);

  return <div>EmptySlot</div>;
}

export default EmptySlot;
