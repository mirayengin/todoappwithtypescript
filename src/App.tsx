import React from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
      <div className="form-control">
        <h2 className='text'>To Do App With TypeScript</h2>
        <div className="form">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;


// Declaring type of props - see "Typing Component Props" for more examples
// type AppProps = {
  // message: string;
// }; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
// const App = ({ message }: AppProps) => <div>{message}</div>;

// you can choose annotate the return type so an error is raised if you accidentally return some other type
// const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

// you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
// const App = ({ message }: { message: string }) => <div>{message}</div>;


// type AppProps = {
//   message: string;
//   count: number;
//   disabled: boolean;
//   /** array of a type! */
//   names: string[];
//   /** string literals to specify exact string values, with a union type to join them together */
//   status: "waiting" | "success";
//   /** an object with known properties (but could have more at runtime) */
//   obj: {
//     id: string;
//     title: string;
//   };
//   /** array of objects! (common) */
//   objArr: {
//     id: string;
//     title: string;
//   }[];
//   /** any non-primitive value - can't access any properties (NOT COMMON but useful as placeholder) */
//   obj2: object;
//   /** an interface with no required properties - (NOT COMMON, except for things like `React.Component<{}, State>`) */
//   obj3: {};
//   /** a dict object with any number of properties of the same type */
//   dict1: {
//     [key: string]: MyTypeHere;
//   };
//   dict2: Record<string, MyTypeHere>; // equivalent to dict1
//   /** function that doesn't take or return anything (VERY COMMON) */
//   onClick: () => void;
//   /** function with named prop (VERY COMMON) */
//   onChange: (id: number) => void;
//   /** function type syntax that takes an event (VERY COMMON) */
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   /** alternative function type syntax that takes an event (VERY COMMON) */
//   onClick(event: React.MouseEvent<HTMLButtonElement>): void;
//   /** any function as long as you don't invoke it (not recommended) */
//   onSomething: Function;
//   /** an optional prop (VERY COMMON!) */
//   optional?: OptionalType;
//   /** when passing down the state setter function returned by `useState` to a child component. `number` is an example, swap out with whatever the type of your state */
//   setState: React.Dispatch<React.SetStateAction<number>>;
// };