import "./App.css";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL)

  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1>A blog</h1>
    </>
  );
}

export default App;
