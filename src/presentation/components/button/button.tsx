import { MouseEventHandler } from 'react';
import style from './button.module.css';

export interface ButtonProps{
  label: string;
  handler?: MouseEventHandler
  type?: 'submit',
  theme?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = 
( {label, handler, type, theme="primary" }: ButtonProps )=>(
  <button className={`${style.button} ${style[theme]}`} type={type} onClick={handler}>{ label }</button>
)