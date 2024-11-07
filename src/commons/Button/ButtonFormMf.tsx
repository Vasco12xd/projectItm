import React from 'react'
import './ButtonFormMf.scss'
import Calendar from '../../assets/icons/appointment.png'
import Headquarters from '../../assets/icons/headquarters.png'
/* import Embed from 'react-embed'; */

interface btnProps{
  styleCustomize: string;
  txtButton : string;
  iconCustomize: string;
  onClick?: (event:any) => void;
  disabledButton: boolean;
  backgroundCustomize: string;
}

const iconToDisplay = (nameIcon : string) => {
  switch (nameIcon) {
    case "iconCalendar":
      return Calendar
    case "headquarters":
      return Headquarters
    default:
      break;
  }
}

const ButtonFormMf = ({
  styleCustomize,
  txtButton,
  disabledButton,
  onClick,
  backgroundCustomize,
  iconCustomize,
  ...props
}:btnProps) => {
  return (
    <div className='k-button-primary'>
      <button disabled={disabledButton} className={styleCustomize} onClick={onClick} style={{background: backgroundCustomize}}>
        <img src={iconToDisplay(iconCustomize)} alt={iconCustomize} style={{display: iconCustomize !== "" ? 'block' : 'none'}} />{txtButton}
      </button>
    </div>
  )
}

export default ButtonFormMf