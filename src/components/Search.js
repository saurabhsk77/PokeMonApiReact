// import React, { useState, useEffect } from "react";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import Images from "./images";
// import { createContext } from "react";

// export const imageData = createContext(null);
// const Search = () => {
//   const [image, setImage] = useState("");

//   let inputEvent = (e) => {
//     var data = e.target.value;
//     setImage(data);
//   };
//   useEffect(() => {
//     console.log(image);
//   }, [image]);
//   return (
//     <div>
//       <form autoComplete="off">
//         <input
//           type="text"
//           placeholder="search image"
//           value={image}
//           onChange={inputEvent}
//         />
//       </form>
//       <imageData.Provider value={image}>
//         <Images />
//       </imageData.Provider>
//     </div>
//   );
// };

// export default Search;
