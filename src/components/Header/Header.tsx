// import React, {useState} from 'react';
// // import CreatePage from '..//CreatePage/CreatePage'
// // import { Link } from 'react-router-dom';
// export interface IAppProps {
//   title?: string
// }

// export default class App extends React.Component<IAppProps> {
    
//   public render() {
//     const { title} = this.props;
  
    

   
    
//     return (
//        <div className='newContainer'>
//           <h3>{title}</h3>
//          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYv7zIb2UkyEaHORmLW3m_eOfl0IbPQ8V_5A&usqp=CAU" alt="" />
//        </div>

//     );
//   }
// }
 


import React from 'react'

export interface IAppProps {
    title?: string
  }

const Header = (props: IAppProps) => {
  return (
    <div className='newContainer'>
      <h3>{props.title}</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYv7zIb2UkyEaHORmLW3m_eOfl0IbPQ8V_5A&usqp=CAU" alt="" />
    </div>
  )
}

export default Header