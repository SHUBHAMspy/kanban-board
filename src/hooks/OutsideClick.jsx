import { useEffect, useState } from 'react'

const OutsideClick = (ref,setOpen) => {
  const [isClicked, setIsClicked] = useState();

  /* Checks for the current element in ref for  */
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(true);
        setOpen(false)
      } else {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref,setOpen])
  return isClicked;
}

export default OutsideClick