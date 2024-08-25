import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -BookCycle`;
  }, [title]);
};

export default useTitle;
