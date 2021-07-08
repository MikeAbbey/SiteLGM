function accordionChange(collapseID,buttonID){
    $(collapseID).on('show.bs.collapse',function(){
        $(buttonID).css({'color': '#FF6701', 'background-color': '#FCECDD'});
    });
    $(collapseID).on('hide.bs.collapse',function(){
        $(buttonID).css({'color': 'black' });
    });
}
accordionChange('#flush-collapseOne','#firstAccordionButton');
accordionChange('#flush-collapseTwo','#secondAccordionButton');
accordionChange('#flush-collapseThree','#thirdAccordionButton');
accordionChange('#flush-collapseFour','#fourthAccordionButton');
accordionChange('#flush-collapseFive','#fifthAccordionButton');
accordionChange('#flush-collapseSix','#sixthAccordionButton');
accordionChange('#flush-collapseSeven','#seventhAccordionButton');
accordionChange('#flush-collapseEight','#eighthAccordionButton');
accordionChange('#flush-collapseNine','#ninthAccordionButton');
accordionChange('#flush-collapseTen','#tenthAccordionButton');
