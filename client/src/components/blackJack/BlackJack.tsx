import React, { Component } from 'react';
import GameRules from './Components/Presentational/GameRules';
import Table from './Components/Table';
import ButtonsContainer from './Components/ButtonsContainer';
import ChipsContainer from './Components/ChipsContainer';
import './index.css';
import './Styles/styles.scss';


class BlackJack extends Component{  

  componentDidMount(){
    const tooltip = document.getElementById('tooltip');
    
    const tooltipText = document.getElementById('tooltipText');
    tooltipText.style.visibility ='hidden';

    tooltip.addEventListener('click', (event)=>{
      event.stopPropagation();

      if(tooltipText.style.visibility === 'hidden'){
        tooltipText.style.visibility = 'visible';
      }else{
        tooltipText.style.visibility = 'hidden';
      }
    })
  }

  render(){
    return(
     <>
        <GameRules/> {/* - tooltip text*/}
        
        <div className = 'tableContainer'>
          <Table/>
        </div> 

        <div className = "chips-block">
          <ButtonsContainer/>
          <ChipsContainer/>
        </div>      

        <div className = 'carpet'>

        </div>
      </>
    )
  }
}

export default BlackJack;