import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Land Owners</h1>

        </div>
        <div className="bottom">
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
    </div>
  )
}

export default Featured