import './widget.scss';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import CropRotateOutlinedIcon from '@mui/icons-material/CropRotateOutlined';
const Widgets = ({type}) => {

    let data;
     switch (type) {
        case "Land Owner" :
            data={
            title:"LAND OWNERS",
            isMoney:false,
            link:"See all land owners",
            icon:<PersonOutlineOutlinedIcon className='icon'
             style={{
                color:"#0BB7AF",
            background:"#D5F3F2",
        borderRadius:"3px",
        padding:"2px"}}/>
             }
             break;
        case "Land" :
            data={
            title:"LANDS",
            isMoney:false,
            link:"See all lands",
            icon:<TerrainOutlinedIcon className='icon' 
            style={{
                color:"#F64E60",
            background:"#F8DDDD",
        borderRadius:"3px",
    padding:"2px"}}/>
             }
             break;
        case "Areas" :
            data={
            title:"AREAS",
            isMoney:false,
            link:"See all areas",
            icon:<CropRotateOutlinedIcon className='icon'
            style={{
                color:"#EE9D01",
            background:"#F8ECDC",
        borderRadius:"3px",
        padding:"2px"}}/>
             }
             break;
     
         default:
             break;
     }

  return (
     
    <div className="widget">
<div className="left">
    <div className="title">
        {data.title}
    </div>
    <div className="counter">20058</div>
    <div className="link">{data.link}</div>

</div>
<div className="right">
    <div className="percentage positive">
       <KeyboardArrowUpOutlinedIcon/>
        20%

    </div>
    {data.icon}

</div>

    </div>
  )
}

export default Widgets