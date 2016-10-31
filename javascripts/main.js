"use strict";

let $todoInput = $("#todoInput");
let $submit = $("#submit");
let editTargetId;

// collect message from input and display
$todoInput.on("keyup", inputText);
$submit.on("click", inputText);

$("body").on("click", function(event) {
  // Handle the click event on delete button
  if (event.target.className === "btnDelete"){
    if (editTargetId !== undefined) {
      $(editTargetId).parentNode.parentNode.style.border = "";
      editTargetId = undefined;
      $todoInput.val("");
    }
    JqueryTodo.removeIncompleteMsg(event.target.id);
  }

  // Handle the click event on edit button
  if (event.target.className === "btnEdit"){
    if (editTargetId !== undefined && editTargetId !== event.target.id) {
      $(editTargetId).parentNode.parentNode.style.border = "";
    }
    editTargetId = event.target.id;
    event.target.parentNode.parentNode.style.border = "3px dotted black";
    var targetMsg = event.target.parentNode.previousSibling.childNodes;
    $todoInput.val(targetMsg[0].innerHTML);
    $todoInput.focus();
  }

  // Handle the click event on complete button
  if (event.target.className === "btnComplete"){
    let index = parseInt(event.target.id.match(/\d+/g));
    JqueryTodo.addMessageToCompleted(index);
    JqueryTodo.removeIncompleteMsg(index);
  }

  // Handle the click event on un-complete button
  if (event.target.className === "btnUncomplete"){
    let index = parseInt(event.target.id.match(/\d+/g));
    console.log("unc", index);
    JqueryTodo.addMessageToIncomplete(JqueryTodo.getCompletedMsg()[index]);
    JqueryTodo.removeCompletedMsg(index);
  }

  JqueryTodo.sendMsgToDom(JqueryTodo.getIncompleteMsg(), JqueryTodo.getCompletedMsg());
});

function inputText(e){
  if($todoInput.val() !== ""){
    $submit.prop('disabled', false);
  }
  if(e.keyCode == 8){
    if($todoInput.val() === ""){
      $submit.prop('disabled', true);
    }
  }
  if((e.keyCode === 13 && $todoInput.val() !== "") || (e.type === "click" && $todoInput.val() !== "")){
    JqueryTodo.addMessageToIncomplete($todoInput.val(), editTargetId);
    JqueryTodo.sendMsgToDom(JqueryTodo.getIncompleteMsg(), JqueryTodo.getCompletedMsg());
    $todoInput.blur();
    $todoInput.val("");
    if (editTargetId !== undefined){
      event.target.parentNode.parentNode.style.border = "";
      editTargetId = undefined;
    }
    $submit.prop('disabled', true);
  }
}

