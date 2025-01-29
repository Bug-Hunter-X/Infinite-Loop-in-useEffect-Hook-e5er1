# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React's `useEffect` hook that leads to an infinite loop.  The example showcases how improper usage of the dependency array can cause the effect to continuously re-render the component.

## Bug Description
The `useEffect` hook is designed to run after the component renders. However, if the dependency array is empty (`[]`), it runs only once after the initial render. However, if the effect modifies state variables within the function, an infinite loop occurs because the state change triggers a re-render, and the effect runs again, restarting the loop. 

## Solution
To prevent this, ensure that the dependencies are properly specified in the second argument of `useEffect`. In this case, an empty array is not appropriate if the effect relies on the state `count` which is constantly changing.