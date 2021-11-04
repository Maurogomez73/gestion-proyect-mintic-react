
import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='bg-pink-600 text-white p-10 m-8 '><p>Un div con propiedades tailwind</p>
        <div className='bg-blue-600 text-white p-10 m-8'>Un div con color diferente 1</div>
        <div className='bg-gray-400 text-white p-10 m-8 border-3 border-blue-900'>Un div con color diferente 2</div>
        <div className='bg-purple-600 text-white p-10 m-8'>Un div con color diferente 3</div>
        <div className='bg-yellow-300 text-black p-10 m-8'>Un div con color diferente 4</div>
      </div>
        
    </div>
  );
}

export default App;
