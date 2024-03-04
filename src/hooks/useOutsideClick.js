import { useRef, useEffect } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        // If the modal is current DOM element , and the click happens outside the modal
        // In other words, the element being clicked is not in the modal DOM
        if (ref.current && !ref.current.contains(e.target)) {
          // console.log("click outside")
          handler();
        }
      }

      // listen events on bubble or on capture (up or down the DOM), default on capture
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
