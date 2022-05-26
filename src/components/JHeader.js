import './Css/JHeader.css';
import {GrUserManager} from "react-icons/gr";


function Header(props) {
  //let mode = props.mode; 
  const menus = { // 객체 
    Login: 'Login',
    ManagerPage: '초기 화면',
    AsRequest: 'A/S 신청자 관리',
    GymReser: '헬스 예약자 관리',
    OverNight: '외박 관리',
    ShuttleManager: '셔틀 버스 예약자 관리',
    MenuPlanner: '식단표 관리',
    ShuttleBus: '셔틀 버스 관리',
    DayOff: '휴일 관리',
    UserManager: '사용자 관리',
  };
  


  return (
      <>
      <div className='HeaderM'> 
      {/* <div className='JHeaderText'>{menus[props.mode]}</div> */}
      <div className='HeaderMBox'>
            <div className='MHeaderText'>Menu</div>
      </div>
      <div className='HeaderTBox'>
      <div className='MHeaderText'>{menus[props.mode]}</div>
      </div>
    </div>
    </>
  );
}

export default Header;