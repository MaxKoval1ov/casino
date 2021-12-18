import React from 'react';
import { connect } from 'react-redux';
import { CancelBet } from '../../../store/Actions/CancelBet';
import DealerCards from './DealerCards';
import PlayerCards from './PlayerCards';
import Pot from './Presentational/Pot';
import EndGameResult from './Presentational/EndGameResult';

const mapStateToProps = (state) => ({
  pot: state.pot,
  cardsAreDealt: state.cardsAreDealt,
  endGameText: state.endGameText
});

const mapDispatchToProps = dispatch => ({
  cancelBet : () => dispatch(CancelBet())
})


const Table = ({pot, cancelBet, cardsAreDealt, endGameText}) => {
    return(
        <div className = 'table'>
            <DealerCards/>
            { pot > 0 && <Pot pot = {pot} cancelBet = {cancelBet} cardsAreDealt = {cardsAreDealt}/>}
            {endGameText && <EndGameResult endGameText = {endGameText}/>}
            <PlayerCards/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);