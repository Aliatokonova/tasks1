import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header/Header'

interface Tab {
  id: number;
  title: string;
  video: string
}

interface TabListProps {
  tabs: Tab[];
  onTabCreate: (e:any) => void;
  setValue: (e: any) => void
  
}

const TabList: React.FC<TabListProps> = ({ tabs, onTabCreate, setValue}) => {
  const[times, setTime] = useState({count : 600})
  const [activePageId, setActivePageId] = useState<null |number>(null)
  // const[page, setPage] = useState(1)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => ({...time, count: time.count -1}));
      
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
    // function onTabCreate() {
    //   setValue('')
    // }

  const AddNewPost =()=>{

  }
  return (
    <div>
      <h2>Timer : {times.count}</h2>
      {
        tabs.map((item) => <button className='input' onClick={() => setActivePageId(item.id)} key={item.id}>  {item.title}</button>) 
      }
     
      <ul style={{
        display : "flex"
      }}>
        {tabs.map((tab,page) => (
          <div key={page} style={{
            display :  activePageId === tab.id ? "block" : "none"
          }}>
            <Header/>
               <NavLink to='/'>{tab.title}</NavLink>
               {/* <img src={tab.} alt="" /> */}
          </div>
        ))}
      </ul>
        <form  className='form' action=""  >
          <h3>The Create page</h3>
          <input className='input' type="text" onChange={(e)=>  setValue (e.target.value )}/>
          <input className='input' type="url" onChange={(url) => setValue(url.target.value)} name="" id="" />
        <button className='create_button' id="1" onClick={onTabCreate} >Create Tab</button>
        </form>
    </div>
  );
};

interface AppProps {}

interface AppState {
  tabs: Tab[];
  value : string
}






 const CreatePage = (props: AppProps) => {
  const [tabs, setTabs] = useState([
    {id: 1, title:"page-1",},
    {id: 2, title:"page-2",},
    {id: 3, title:"page-3",}
  ],)

  const [newValue, setNewValue] = useState("")
  const [video, setVideo]= useState('')

  const handleTabCreate = (e: any) => {
    console.log(newValue);
    
    e.preventDefault()
    const newTab: Tab = {
      id: Date.now(),
      title: newValue,
      video: video
    };
   

    setTabs( prev =>  [...prev, newTab]);
    
  };

  return (
    <div>
      <h1>Page for New tabs</h1>
      <TabList tabs={tabs} onTabCreate={handleTabCreate} setValue={setNewValue} newVideo = {setVideo} />
    </div>
  );
}

// class CreatePage extends React.Component<AppProps, AppState> {

//   constructor(props: AppProps) {
//     super(props);
//     this.state = {
//       tabs: [
//         {id: 1, title:"page-1",},
//         {id: 2, title:"page-2",},
//         {id: 3, title:"page-3",}
//       ],
//       value: '',
//     };
//   }

  
//   handleTabCreate = (e: any) => {
//     console.log(this.state);
    
//     e.preventDefault()
//     const newTab: Tab = {
//       id: Date.now(),
//       title: '',
//     };
   

//     this.setState((prevState) => ({
//       tabs: [...prevState.tabs, newTab],
//     }));
    
//   };

//   render() {
//     const { tabs } = this.state;

//     return (
//       <div>
//         <h1>Page for New tabs</h1>
//         <TabList tabs={tabs} onTabCreate={this.handleTabCreate} setValue={this.setState} />
//       </div>
//     );
//   }
// }

export default CreatePage;
