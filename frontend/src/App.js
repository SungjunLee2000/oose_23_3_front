import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/member/signUp.js";
import MemberSearch from "./components/member/memberSearch";

// function App() {
// return (
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>

// );
// }

function App() {
  return <SignUp></SignUp>;
}

export default App;
