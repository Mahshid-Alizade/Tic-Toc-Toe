import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import player1img  from './x.svg';
import player2img  from './o.svg';
import React from 'react';
import './index.css';

const MyButton1Hover = styled(Button)({

  background: '#EFEFEF',
  border: 0,
  borderRadius: 4,
  color: 'white',
  height: '210px',
  width: '210px',
  fontSize: 125,
  top: 0,
  left: 0,
  cursor: 'pointer',

  '&:hover':{
    background: '#EFEFEF',
    backgroundImage: 'url(' + player1img + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: 120,
    backgroundPosition: 'center'
  },

});

const MyButton2Hover = styled(Button)({

  background: '#EFEFEF',
  border: 0,
  borderRadius: 4,
  color: 'white',
  height: '210px',
  width: '210px',
  fontSize: 125,
  top: 0,
  left: 0,
  cursor: 'pointer',

  '&:hover':{
    background: '#EFEFEF',
    backgroundImage: 'url(' + player2img + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: 120,
    backgroundPosition: 'center'
  }

});

const MyButton1 = styled(Button)({

  background: 'rgb(255, 0, 204)',
  border: 0,
  borderRadius: 4,
  color: '#00000000',
  height: '210px',
  width: '210px',
  fontSize: 125,
  top: 0,
  left: 0,
  backgroundImage: 'url(' + player1img + ')',
  backgroundRepeat:'no-repeat',
  backgroundSize: 120,
  backgroundPosition: 'center',
  WebkitTransition: '0.25s ease',
  transition: '0.25s ease',

  '&:hover':{
    background: 'rgb(255, 0, 204)',
    backgroundImage: 'url(' + player1img + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: 120,
    backgroundPosition: 'center'
  },

});

const MyButton2 = styled(Button)({

  background: '#9e9e9e',
  border: 0,
  borderRadius: 4,
  color: '#00000000',
  height: '210px',
  width: '210px',
  fontSize: 125,
  top: 0,
  left: 0,
  backgroundImage: 'url(' + player2img + ')',
  backgroundRepeat:'no-repeat',
  backgroundSize: 120,
  backgroundPosition: 'center',
  WebkitTransition: '0.25s ease',
  transition: '0.25s ease',

  '&:hover':{
    background: '#9e9e9e',
    backgroundImage: 'url(' + player2img + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: 120,
    backgroundPosition: 'center'
  }

});

function hoverTurn(xIsNext , props){
  if(props.className === 'button player1')
    return(
    <MyButton1 className={props.className} onClick={props.onClick}>
      {props.value}
    </MyButton1>)

  else if(props.className === 'button player2')
    return(
    <MyButton2 className={props.className} onClick={props.onClick}>
      {props.value}
    </MyButton2>)  

  else if(xIsNext && !props.value)
    return(
    <MyButton1Hover className={props.className} onClick={props.onClick}>
      {props.value}
    </MyButton1Hover>)

  else if(!xIsNext && !props.value)
    return(
    <MyButton2Hover className={props.className} onClick={props.onClick}>
        {props.value}
    </MyButton2Hover>)
}

function Square(props) {
    return (
        hoverTurn(props.xIsNext , props)
      );
}

export default Square;