import {NavUl, NavUl2, NavUl3} from './NavUl.jsx'

export const NavigationA = ({ logo, ht2, onChange}) => (
  <nav ref={ht2}>
    <NavUl>
      <li className="log0">{logo}</li>
      <li className='icon' onClick={() => onChange('camera')}><i className="fa-solid fa-camera"></i></li>
      <li className='icon'><i className="fa-solid fa-magnifying-glass"></i></li>
      <li className='icon'><i className="fa-solid fa-ellipsis-vertical"></i></li>
    </NavUl>
  </nav>
)

export const NavigationB = ({onChange, active}) => {
  const checkActive =(key, active) => 
    (key === active)?'active':undefined;
  return (
    <nav className='huh'>
      <NavUl2>
        <li className={checkActive('community', active)+ ' smal'} onClick={() => onChange('community')}><i className="fa-solid fa-users"></i></li>
        <li className={checkActive('chat', active)} onClick={() => onChange('chat')}>Chats</li>
        <li className={checkActive('update', active)} onClick={() => onChange('update')}>Updates</li>
        <li className={checkActive('call', active)} onClick={() => onChange('call')}>Calls</li>
      </NavUl2>
    </nav>
  )
} 
export const NavigationC = ({pp, name, backFunction, h}) => (
  <nav>
    <NavUl3 ref={h}>
      <li className="b" onClick={() => backFunction(null)}><i className="fa-solid fa-arrow-left"></i><img src={pp || 'images/default.jpg'}/></li>
      <li className="c">
        <h3>{name}</h3>
        <span>online</span>
      </li>
      <li className="d"><i className="fa-solid fa-video"></i></li>
      <li className="d"><i className="fa-solid fa-phone"></i></li>
      <li className="d"><i className="fa-solid fa-ellipsis-vertical"></i></li>
    </NavUl3>
  </nav>
)
