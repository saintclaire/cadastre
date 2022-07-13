import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

function Navbar() {
  return (
   <div className="navbar"> 
   <div className="wrapper">
       <div className="search">
       <input type='text' name='search' placeholder='search' />
   <SearchIcon className='icon'/>
       </div>
       <div className="items">
       <div className="item">
               <FullscreenExitOutlinedIcon className='icon'/>
           </div>
           <div className="item">
               <NotificationsNoneOutlinedIcon className='icon'/>
           </div>
           <div className="item">
               < ChatBubbleOutlineOutlinedIcon className='icon'/>
           </div>
           <div className="item">
               < MenuIcon className='icon'/>
           </div>
           
           
          
           <div className="item">
               <img src='https://i.pinimg.com/originals/32/67/08/32670885fafbf7004b8c2a7c610e849d.jpg' alt='avatar' className='avatar'/>
           </div>
       </div>
   </div>
   
   
   </div>
  )
}

export default Navbar