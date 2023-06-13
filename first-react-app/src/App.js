import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

// function App() {
// // jsx wit single line
// let jsx1= <h1>Hello Worls</h1>
// let jsx2= (
// <a>

// <h1>Hello Wor</h1>
// <h1>Hello Wor</h1>
// </a>

// // jsx wit single line
// );
// return false ? jsx1 : jsx2;
// }

// function App(){
// let str="Khagesh SInul Nemade"
// let pi=3.14;
// let a=str+pi;
// // whenn we want to use js in return statement then use {}
//   return(<>
//   <h1> PI+{str}</h1>
//   <h1>STR={pi}</h1>
//   </>

//   );
// }

function App() {
  // jsx all are javascript htnl and css are also js
  let style = { color: "black", background: "wheat" };

  return (
    <>
      <h1 className="bg-primary ">Hello Worls</h1>
<DataBlock/>
        </>
  );
}

function DataBlock() {
  return (
    <>
      <div className="alert alert-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus a
        corrupti odit veniam explicabo mollitia, harum obcaecati numquam
        nesciunt suscipit temporibus, vitae omnis sit. Possimus, repellendus.
        Eum libero facilis vitae nobis sunt laboriosam aliquid suscipit
        asperiores voluptatum ullam in quo tempore, consectetur tenetur nisi
        eaque ab voluptate impedit? Rerum, eos! Itaque pariatur distinctio, quia
        velit excepturi accusamus earum eius corporis, repellat, ex id iusto
        libero voluptas eveniet ab deserunt quidem? Libero quisquam velit est
        totam laborum. Molestias laboriosam doloribus iure suscipit adipisci
        distinctio fugit. Esse atque sint eveniet alias, animi neque debitis.
        Mollitia suscipit error recusandae ea obcaecati perspiciatis laboriosam.
      </div>
    </>
  );
}

export default App;
