import './App.css';
import React, { useState } from 'react';

//search videos with user input
function SearchBar() {

  return(
    <div className='SearchBar'>

    </div>
  );
}

function VideoPlayer() {

  return(
    <div className='VideoPlayer'>

    </div>
  );
}

function AddComment() {

  return(
    <div className='AddComment'>

    </div>
  );
}

// function EditComment() {

//   return(
//     <div className='EditComment'>

//     </div>
//   );
// }

// function AddReply() {

//   return(
//     <div className='AddReply'>

//     </div>
//   );
// }

function ViewComments() {

  return(
    <div className='ViewComments'>
      {/* <EditComment/>
      <AddReply/> */}
    </div>
  );
}

function App() {
  // const [comments, createComments] = useState([
  //   {

  //   }
  // ]);

  return (
    <div className="App">
      <SearchBar/>
      <VideoPlayer/>
      <AddComment/>
      <ViewComments/>
    </div>
  );
}

export default App;
