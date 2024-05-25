import SaveAsIcon from '@mui/icons-material/SaveAs';
import GridViewIcon from '@mui/icons-material/GridView';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChecklistIcon from '@mui/icons-material/Checklist';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TuneIcon from '@mui/icons-material/Tune';

const SideBar = () => {
    return (
        <div
            className="rounded-tr-3xl flex flex-col gap-[3%] bg-white w-[80%] p-[20%] drop-shadow-2xl">
           <SaveAsIcon sx={{color : 'black', height : "25px", width : "25px"}}/>
           <GridViewIcon sx={{color : 'black', height : "25px", width : "25px"}}/>
           <PermContactCalendarIcon sx={{color : 'black', height : "25px", width : "25px"}}/>
           <FindInPageIcon sx={{color : 'black', height : "25px", width : "25px"}}/>
           <BusinessCenterIcon sx={{color : 'black', height : "25px", width : "25px"}}/>
           <ChecklistIcon sx={{color : 'black', height : "25px", width : "25px"}}/>
           <HandshakeIcon sx={{color : 'black', height : "25px", width : "25px"}}/>
           <SupportAgentIcon sx={{color : 'black', height : "25px", width : "25px"}}/>
           <TuneIcon sx={{color : 'black', height : "25px", width : "25px"}} />
        </div>);
}

export default SideBar;