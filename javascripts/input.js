"use strict";

var JqueryTodo = (function(handleInput) {
  var incompleteList = [];
  var completedList = [];

  handleInput.addMessageToIncomplete = function(inputWords, elementId){
    if (elementId === undefined){
      // let newList = {'mission':inputWords, 'time': Date.now() + 24*60*60*1000};
      // incompleteList.push(newList);
      incompleteList.push(inputWords);
    } else {
      var index = parseInt(elementId.match(/\d+/g));
      // incompleteList[index].mission = inputWords;
      // incompleteList[index].time = Date.now() + 24*60*60*1000;
      incompleteList[index] = inputWords;
    }
  };

  handleInput.addMessageToCompleted = function(index){
    completedList.push(incompleteList[index]);
  };

  handleInput.getIncompleteMsg = function(){
    return incompleteList;
  };

  handleInput.getCompletedMsg = function(){
    return completedList;
  };

  handleInput.removeIncompleteMsg = function(index){
      incompleteList.splice(index, 1);
  };

  handleInput.removeCompletedMsg = function(index){
      completedList.splice(index, 1);
      console.log("bb", index,completedList);
  };

  return handleInput;

})(JqueryTodo || {});