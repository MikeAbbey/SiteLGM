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