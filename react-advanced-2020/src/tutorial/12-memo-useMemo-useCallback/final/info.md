### memo

`memo()` is a function. (NOT HOOK!)

Every time props or state changes, component re-renders.
memo is a higher order component. If your component renders the same result given the same **props**, you can **wrap it in a memo() call** to React. memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

**wrap component in a memo() call**

`const ComponentName = React.memo(() => { return (something) })`

---

### useMemo

The useMemo is a hook used in the functional component of react that returns a memoized **value**. ..

---

### useCallback

Typically useCallback is helpful when passing callback **props** to highly optimised **child components**. to prevent unnecessary re-renders when its _props change_, then it is important that any callback props do not change between renders. Similar memo().

**wrap function/prop in a useCallback() call**
**Here You always need dependency array - [cart]**

`const addToCart = useCallback(() => { setCart(cart + 1) }, [cart])`
