export const useBeforeLeave = (onbefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", onbefore);

    return () => document.removeEventListener("mouseleave", onbefore);
  }, []);
};
