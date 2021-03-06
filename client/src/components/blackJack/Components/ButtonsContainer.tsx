import React from 'react';
import {connect} from 'react-redux';
import Button from './Presentational/Button';
import { Deal } from '../../../store/Actions/Deal';
import { Hit } from '../../../store/Actions/Hit';
import { Stand } from '../../../store/Actions/Stand';
import { Double } from '../../../store/Actions/Double';

const mapStateToProps = (state) => ({
    cardsAreDealt: state.cardsAreDealt,
    firstMove: state.firstMove,
    pot : state.pot,
    playerTurn : state.playerTurn
})

const mapDispatchToProps = (dispatch) => ({
    dealCards: () => dispatch(Deal()),
    hit: () => dispatch(Hit()),
    stand: () => dispatch(Stand()),
    double: () => dispatch(Double())
})

const ButtonsContainer = ({cardsAreDealt, firstMove, playerTurn, dealCards, pot, hit, stand, double}) => {
  let buttons;
  if(cardsAreDealt && playerTurn){
    if(firstMove){
      buttons = [
        <Button key='hit' buttonText = 'Hit' handleClick = {hit} styleClass = 'btnHit'/>,  
        <Button key = 'double' buttonText = 'Double' handleClick = {double} styleClass = 'btnDouble'/>, // can only be played on the first move
        <Button key = 'stand' buttonText = 'Stand' handleClick = {stand} styleClass = 'btnStand'/>
      ]
    }else if(!firstMove){
      buttons = [
        <Button key='hit' buttonText = 'Hit' handleClick = {hit} styleClass = 'btnHit'/>,
        <Button key = 'stand' buttonText = 'Stand' handleClick = {stand} styleClass = 'btnStand'/>
      ]
    }
  }
  
  return (
    <div className = 'buttonsContainer'>
      {!cardsAreDealt && pot>0 && <Button buttonText = 'Deal' handleClick = {dealCards} styleClass = 'btnDeal'/>}
      {buttons}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);
