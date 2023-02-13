import './App.css';
import NavBar from './components/navbar';
import Home from './components/Home';

const allPosts = [{
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

]

function App() {
  return (
    <div style={{width:'900px', margin: '0 auto'}}>
      <NavBar />
      <Home blogs={allPosts}/>
    </div>
  );
}

export default App;
