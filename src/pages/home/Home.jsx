import React from 'react';
import Navbar from '../../components/navbar/Navbar';
// import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widget/Widgets';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import './home.scss';
import {Datatable} from '../../components/datatable/Datatable';

const Home = () => {
  return (
    <>
    <div className="home">
        <Sidebar/>
        <div className="container">
          <Navbar/>
          <div className="widget-wrapper">
        <Widgets type='Land Owner'/>
          <Widgets type='Land'/>
          <Widgets type='Areas'/>
        </div>
        <div className="charts">
       
          <Chart/> 
          
        </div>
        <div className="user_list_wrapper">
        <Datatable/>
        </div>
       
          
        </div>
        
      
    </div>
    </>
  )
}

export default Home