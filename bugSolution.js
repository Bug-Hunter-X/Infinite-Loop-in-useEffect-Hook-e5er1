```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic - this will run only once after the component renders
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); 
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```