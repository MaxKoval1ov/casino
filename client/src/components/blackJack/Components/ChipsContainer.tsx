import {connect} from 'react-redux';
import AllPlayersChips from './Presentational/Chips';
import { PlaceBet } from '../../../store/Actions/PlaceBet';

const mapStateToProps = state => ({
    currentMoney: state.currentMoney,
    cardsAreDealt: state.cardsAreDealt
})

const mapDispatchToProps = dispatch => ({
    placeBet : (e) => {
        const cash = parseInt(e.target.getAttribute('value'));
        dispatch(PlaceBet(cash));
    }
})

const ChipsContainer = connect(mapStateToProps, mapDispatchToProps)(AllPlayersChips);

export default ChipsContainer;