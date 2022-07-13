import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () => {
  return (
   <div className="sidebar">
       <div className="top">
           <div className="logo">Cadastre</div>
       </div>
       <hr/>
       <div className="center">
           <ul>
               <li>
                   <DashboardIcon/>
                   <span>
                   Dashboard</span></li>
                   <p>PROFILE</p>
                   <li><LandscapeOutlinedIcon/><span>
                   Lands</span></li>
                   <li>
                       <MapOutlinedIcon/><span>
                   Map</span></li>
                   <li>
                       <GridViewOutlinedIcon/><span>
                  Blocks</span></li>
                  <li>
                       <NotificationsOutlinedIcon/><span>
                  Notification</span></li>
                  <li>
                       <SettingsOutlinedIcon/><span>
                  Settings</span></li>
                  <p>USER</p>
                  <li>
                       <PersonOutlinedIcon/><span>
                   Users</span></li>
                  
                  <li>
                     <span>
                   Users Management</span></li>
                     
                  <li>
                     <span>
                   Add Users</span></li>
                  <li>
                       <ExitToAppIcon/><span>
                  Logout</span></li>
                  

                  

           </ul>
       </div>
       <div className="footer"></div>
   </div>
  )
}

export default Sidebar