## React Router

see info: [react router](https://reactrouter.com/web/guides/quick-start)

> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

> React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

### Step 1: install special package:

```
npm install react-router-dom

```

### Step 2: import router from package:

```
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

```

```
import { Link } from 'react-router-dom';
```

### _path="/"_

direct domain.

> Example: google.com, cnn.com..

### _path="/about"_

domain/about.

> Example: google.com/about, cnn.com/about..

### _exact path="/"_

exact path for correction of nondoubling pages "/ + about"

### _path="\*"_

If I enter an incorrect / unwritten link in all cases I will go to the page specified by me. Used for outputing URL Errors..

We need there **switch** property, for handle switching links into each other

### `<Link to='/about'>Home</Link>`

Used instead of `<a href='domain/about'>Home</a>`

    <li>
        <Link to='/'>Home</Link>
    </li>
    <li>
        <Link to='/about'>About</Link>
    </li>
    <li>
        <Link to='/people'>People</Link>
    </li>

### useParams

is one of the Hooks methods that React Router ships with. ... According to the definition in React Router doc, useParams returns: an object of key/value pairs of URL parameters.

`import { Link, useParams } from 'react-router-dom';`
`const { id } = useParams();`
