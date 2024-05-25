import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Body from './components/Body';

function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className='p-[1%] flex shadow-xl bg-[#ffffff] h-[10%] mb-[2%]'>
      <Header />
      </div>
      <div className='flex'>
        <div className='flex w-[7%] '>
        <SideBar />
        </div>
        <div className='flex w-[93%] '>
        <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
