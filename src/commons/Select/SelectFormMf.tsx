import './SelectFormMf.scss'
import IconTypeId from '../../assets/icons/branding_watermark.png'
import IconGender from '../../assets/icons/venus-mars.png'
import IconAgreement from '../../assets/icons/building.png'
import IconSelect from '../../assets/icons/navigate_next.png'

import { useEffect, useRef, useState } from 'react'

interface ListItem {
  value: string; 
  text: string;
  bukealaId?: string;
}

interface SelectProps{
  styleCustomize: 'k-select--no-selected' | 'k-select--selected';
  valueInserted : string;
  idSelect: string;
  labelCustomize: string;
  iconCustomize: string;
  altIcon: string;
  optionsSelect: Array<ListItem>;
  placeholderSelect: string;
  onChange?: (event:any) => void;
}

const iconToDisplay = (nameIcon : string) => {
  switch (nameIcon) {
    case "iconTypeId":
      return IconTypeId
    case "iconGender":
      return IconGender
    case "iconAgreement":
      return IconAgreement
    default:
      break;
  }
}

const SelectFormMf = ({
  styleCustomize,
  valueInserted,
  labelCustomize,
  idSelect,
  iconCustomize,
  altIcon,
  optionsSelect,
  placeholderSelect,
  onChange,
  ...props
}: SelectProps) => {
  const [showDropDown, setShowDropDown] = useState(false)
  const elementoRef = useRef<HTMLDivElement | null>(null); 
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  useEffect(() => {
    setShowDropDown(false)
  }, [valueInserted])

  useEffect(() => {
    const handleClicOutElement = (event:any) => {
      if (elementoRef.current && !elementoRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener('click', handleClicOutElement);
    return () => {
      document.removeEventListener('click', handleClicOutElement);
    };
  }, []);

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown)
  }

  useEffect(() => {
    const handleKeyDown1 = (event: any) => {
      if (elementoRef.current && !elementoRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown1);
    return () => {
      document.removeEventListener('keydown', handleKeyDown1);
    };
    }
  , []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      if (!showDropDown) {
        setShowDropDown(true);
      } else if (highlightedIndex !== null) {
        const selectedOption = optionsSelect[highlightedIndex];
        if (onChange) {
          onChange({
            target: {
              id: selectedOption.value,
              value: selectedOption.text,
            },
          });
        }
        setShowDropDown(false);
      }
    } else if (event.key === 'ArrowDown') {
      setShowDropDown(true);
      setHighlightedIndex((prevIndex) =>
        prevIndex === null || prevIndex === optionsSelect.length - 1
          ? 0
          : prevIndex + 1
      );
    } else if (event.key === 'ArrowUp') {
      setShowDropDown(true);
      setHighlightedIndex((prevIndex) =>
        prevIndex === null || prevIndex === 0
          ? optionsSelect.length - 1
          : prevIndex - 1
      );
    }
  };
  


  return (
    <div className='k-select' ref={elementoRef}>
      <label htmlFor={idSelect}>{labelCustomize} <span></span></label>
      <img src={iconToDisplay(iconCustomize)} alt={altIcon} className={valueInserted !== "" ? 'k-select__img-dark':''}/>
      <div id={idSelect} className="k-select__select-input" onClick={handleShowDropDown} tabIndex={0} onKeyDown={handleKeyDown}>
          <span className={styleCustomize}>{valueInserted === "" ? placeholderSelect:valueInserted}</span>
      </div>
      {showDropDown?
      <div className='k-select__options-select'>
        <ul className='k-select__options-select--scrollbar'>
        {optionsSelect.map((option, index)=>(
          <li className={index === highlightedIndex ? 'highlighted' : ''} key={index} id={option.value} value={option.value} onClick={onChange}>{option.text}</li>
        ))}
        </ul>
      </div>:
      <></>
      }
      <img className='k-select__icon-arrow-down' src={IconSelect} alt='Icono flecha selector '/>
    </div>
  )
}

export default SelectFormMf