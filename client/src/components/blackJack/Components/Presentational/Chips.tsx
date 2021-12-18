import React from 'react';
const importAll = (req) => {
    let images = {}
    
    req.keys().forEach(elem => {
        let correctedElem = elem.replace('./','');
        correctedElem = correctedElem.replace('.png','');
        
        images[correctedElem] = req(elem);
    
    });
    return images;
}
  
const chipsImages = importAll(require.context('../../Cards/Chips', false, /\.png$/));

console.log(chipsImages);

const calculateAvailableChips = (currentMoney) =>{
    const chips = [1, 5, 10, 50, 100, 500, 1000, 10000]
    let possibleChips = chips.filter(elem => currentMoney>= elem);

    if(possibleChips.length > 6){
        return possibleChips.slice(-6);
    }

    return possibleChips;
}

const Chip = function({value, onClick}:any):any {
    let chipImage = chipsImages[value];
    return (
       
        <div className ='chip' 
        //@ts-ignore  
        value = {value}  onClick = {onClick}>
            <img alt ='chipimg'  //@ts-ignore
             value = {value}  className = 'chipImage' src ={chipImage.default} />
            <span 
            //@ts-ignore
            value = {value} >{value}$</span>
        </div>
    )
}


const AllPlayersChips = ({cardsAreDealt, currentMoney, placeBet}) => {
    let possibleChips = calculateAvailableChips(currentMoney);
    
    let chips = possibleChips.map((elem, idx) => {
        return <Chip onClick = {placeBet} key={idx} value = {elem}/>
    })

    return(
        <div>
            {!cardsAreDealt && 
            <div className = 'allPlayersChips'>
                {chips}
            </div>
            }
            <div className = 'currentMoney'>Your current cash: {currentMoney}$</div>
        </div>
        
    )
}

export default AllPlayersChips;