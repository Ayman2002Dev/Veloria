import { Slide, useScrollTrigger } from "@mui/material";
import React, { useEffect, useState } from "react";

function BottomNavigation({ children }) {
  const trigger = useScrollTrigger({
    // disableHysteresis: true,
  });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer;
    if (trigger) {
      timer = setTimeout(() => {
        setVisible(false);
      }, 2000);
    } else {
      setVisible(true);
    }

    return () => clearTimeout(timer);
  }, [trigger]);
  return (
    <Slide direction="up" in={visible} mountOnEnter unmountOnExit>
      {children}
    </Slide>
  );
}

export default BottomNavigation;
