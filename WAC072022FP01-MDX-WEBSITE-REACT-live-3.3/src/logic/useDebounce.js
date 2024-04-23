const useDebounce = function (value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        getData(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  const getData = async () => {
    const data = await axios.get(`https://api.mdx.ac.ae/api/search/${searchTerm}`);
    setDebouncedValue(data?.data?.data?.results);
  };
  return debouncedValue;
};

export default useDebounce;
