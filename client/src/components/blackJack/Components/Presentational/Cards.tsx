import React from 'react';
import { compareScores } from '../../../../store/Reducers/herlperFunctions';
import Score from './Score';

const importImage = (req) => { 
    let image = {}
    
    req.keys().forEach(elem => {
        let correctedElem = elem.replace('./','');
        correctedElem = correctedElem.replace('.jpg','');
        
        image[correctedElem] = req(elem);
    
    });
    return image;
}
const faceDownCard:any = importImage(require.context('../../Cards/FaceDown', false, /\.jpg$/));


const Card = ({imageSource, hidden}:any) => {
    let className = 'cardImage ';
    let backOfTheCard;
    
    if(hidden === true){
        className += 'faceDown ';
        backOfTheCard = <img src = {faceDownCard.faceDownCard.default} alt='back of the card' className = 'cardImage '/>
        
    }else{
        backOfTheCard = <img src = {faceDownCard.faceDownCard.default} alt='back of the card' className = 'cardImage backOfTheCardRotate'/>
    }
    return(
        <div className = 'cardDiv '>
            <div className = 'cardImageContainer'>
                <img src={imageSource} alt='card' className = {className} draggable ='false'/>
                {backOfTheCard}
            </div>
            
        </div>
    )
}



class AllCardsContainer  extends React.Component <any,any> {
    timeouts:any;
    constructor(props) {
        super(props);
        this.timeouts = [];
        this.componentCleanup = this.componentCleanup.bind(this);
    }
    componentDidUpdate(){
        let {player, cardsAreDealt, playerTurn, dealerMove, dealerCards, dealerScore, playerCards, playerScore, endGame} = this.props;
        let comparisonResult:any = '';

        if(cardsAreDealt){
            if(player === 'dealer' && !playerTurn){
                if(playerScore > 21){
                    comparisonResult = compareScores(playerScore, dealerScore, playerCards, dealerCards);
                    this.timeouts[0] = setTimeout(() => {
                        endGame(comparisonResult);
                    }, 1800);

                }else if(playerScore[1] === 21 && playerCards.length === 2){
                    comparisonResult = compareScores(playerScore, dealerScore, playerCards, dealerCards);
                    this.timeouts[1] = setTimeout(() => {
                        endGame(comparisonResult);
                    }, 2200);

                }else if(compareScores(playerScore, dealerScore, playerCards, dealerCards).text === 'Charlie Win!!!'){
                    comparisonResult = compareScores(playerScore, dealerScore, playerCards, dealerCards);
                    this.timeouts[2] = setTimeout(() => {
                        endGame(comparisonResult);
                    }, 2200);

                }
                else if(dealerCards.length === 2 && dealerScore[1] === 21){ 
                    comparisonResult = compareScores(playerScore, dealerScore, playerCards, dealerCards);
                    this.timeouts[0] = setTimeout(() => {
                        endGame(comparisonResult);
                    }, 1800);

                }else if(dealerScore[1] <= 16 || dealerScore <= 16){
                    this.timeouts[1] = setTimeout(() => {
                        dealerMove();
                    }, 1200);
                }else{
                    comparisonResult = compareScores(playerScore, dealerScore, playerCards, dealerCards);
                    this.timeouts[2] = setTimeout(() => {
                        endGame(comparisonResult);
                    }, 2000);
                }
            }
        }
    }

    componentDidMount(){
        window.addEventListener('beforeunload', this.componentCleanup)
    }
    componentCleanup(){
        this.timeouts.map(elem => clearInterval(elem)); 
    }
    componentWillUnmount(){
        this.componentCleanup();
        window.removeEventListener('beforeunload', this.componentCleanup); 
    }
    
    render(){
        let {cardsAreDealt, src, playerTurn, score } = this.props;
        let cards;
        if(cardsAreDealt){
            cards = src.map((elem, ind) => {
                if(playerTurn === true && ind === 1){
                    console.log(elem)

                    return <Card imageSource = {elem.src.default} key = {ind} hidden = {true}/>
                }else{
                    return <Card imageSource = {elem.src.default} key = {ind} />
                }
            });
            if(score.length > 1){
                score = score[0] + '/' + score[1];
            }
        }
        
        return(
            <div className = 'cardsAndScoreContainer'>
                <div className = 'cardsOnTable'>{cards}</div>
               { score !== 0  && <Score score={score} playerTurn = {playerTurn}/>}
            </div>
        );
    }
    
}


export default AllCardsContainer;