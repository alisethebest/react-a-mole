import React, { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer() {
  const [displayMole, setDisplayMole] = useState(false);

  const handleBop = () => {
    // handle mole bopping logic here (you may want to include scoring logic here)
    setDisplayMole(false);
  };

  const display = displayMole ? (
    <Mole onBop={handleBop} />
  ) : (
    <EmptySlot onAppear={() => setDisplayMole(true)} />
  );

  return <div>{display}</div>;
}

export default MoleContainer;
