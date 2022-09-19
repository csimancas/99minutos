import { useCallback, useState } from "react";

const useSideNav = () => {
  const [open, setOpen] = useState(undefined);

  const onOpen = useCallback(
    (openW) => setOpen(openW == open ? undefined : openW),
    [open]
  );

  return {
    open,
    onOpen,
  };
};

export default useSideNav;
