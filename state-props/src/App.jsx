import Stud from "./components/stud";


function App() {
  let stud = {
    name : "dhaval",
    age : 24
  }
  return (
    <>
      <h1>Hello From App Components</h1>
      <Stud data={stud}/>
    </>
  )
}


export default App;