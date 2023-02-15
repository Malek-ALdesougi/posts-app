import './App.css';
import NavBar from './components/navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import NewPost from './components/NewPost/index';
import { useEffect, useState } from 'react';

// send this variable with use context 

// read the last object id in this variable

// add the new object to this variable 


// const allPosts = [{
//   'id': 1,
//   'author': 'malek',
//   'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
// },

// {
//   'id': 2,
//   'author': 'Omar',
//   'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
// },

// {
//   'id': 3,
//   'author': 'Issa',
//   'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
// },

// {
//   'id': 4,
//   'author': 'Bilal',
//   'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
// },

// ]

function App() {
  const [allPosts, setAllPosts] = useState([{
    'id': 1,
    'author': 'malek',
    'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
  },

  {
    'id': 2,
    'author': 'Omar',
    'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
  },

  {
    'id': 3,
    'author': 'Issa',
    'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
  },

  {
    'id': 4,
    'author': 'Bilal',
    'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
  },
  
])

// functio nt pass to the sibling and be able to edit the state 
const editState = (data) => {
console.log(data);
allPosts.push(data);
}


  return (
    <div className='malek' style={{ width: '800px', margin: '0 auto' }}>
      <NavBar />
      <Routes>
        <Route index path='/' element={<Home blogs={allPosts} />} />
        <Route path='/new-post' element={<NewPost blogs={allPosts} editState={editState}/>} />
      </Routes>
    </div>
  );
}

export default App;
