import AllCardsContainer from './Presentational/Cards';
import { DealerMove } from '../../../store/Actions/DealerMove';
import { EndGame } from '../../../store/Actions/EndGame';
import {connect} from 'react-redux';


const mapStateToProps = state => ({
    src: state.dealerCards,
    cardsAreDealt: state.cardsAreDealt,
    player: 'dealer',
    firstMove: state.firstMove,
    playerTurn: state.playerTurn,
    score: state.dealerScore,
    dealerCards: state.dealerCards,
    playerCards: state.playerCards,
    dealerScore: state.dealerScore,
    playerScore: state.playerScore
});

const mapDispatchToProps = dispatch => ({
    dealerMove: (move:any) => dispatch(DealerMove(move)),
    endGame: (comparisonResult) => dispatch(EndGame(comparisonResult))
})


const DealerCards = connect(mapStateToProps, mapDispatchToProps)(AllCardsContainer);

export default DealerCards;