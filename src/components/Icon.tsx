import styled from 'styled-components';
import sprite from '../assets/img/sprite.svg'

export const Icon = (props:IconProps) => {
return (
    <svg width={props.width || "50" } height={props.height || "50" } viewBox={props.viewBox || "0 0 62 62" } fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${sprite}#${props.idSvg}`}></use>
    </svg>
)}

type IconProps = {
    idSvg?: string;
    width?: string ;
    height?: string ;
    viewBox?: string ;
}

