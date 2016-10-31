"use strict";

var JqueryTodo = function (newChatty) {

	newChatty.sendMsgToDom = function(incompleteData, completedData){
      let dataInDOM = "";
      // incompleteData.sort(function(a, b){
        // return b.time - a.time;
      // });
      for(let i = 0; i < incompleteData.length; i++){
        dataInDOM += `<div id="todoItem-${i}">`;
          dataInDOM += `<div class="name">${i + 1}</div>`;
          dataInDOM += `<div>`;
              dataInDOM += `<div class="mission">${incompleteData[i]}</div>`;
          dataInDOM += `</div>`;
          // dataInDOM += `<div>`;
              // dataInDOM += `<div class="time">Due Date: ${new Date(incompleteData[i].time)}</div>`;
          // dataInDOM += `</div>`;
          dataInDOM += `<div>`;
              dataInDOM += `<a href="#btnDelete" class="btnDelete" id="btn-${i}">Delete</a>`;
              dataInDOM += `<span> | </span>`;
              dataInDOM += `<a href="#btnEdit" class="btnEdit" id="btnEdit-${i}">Edit</a>`;
              dataInDOM += `<span> | </span>`;
              dataInDOM += `<a href="#btnComplete" class="btnComplete" id="btnComplete-${i}">Complete</a>`;
          dataInDOM += `</div>`;
        dataInDOM += `</div>`;
      }
      $("#incompleteDisplay").html(dataInDOM);

      dataInDOM = "";
      for(let i = 0; i < completedData.length; i++){
        dataInDOM += `<div id="completedItem-${i}">`;
          dataInDOM += `<div class="name">${i + 1}</div>`;
          dataInDOM += `<div>`;
              dataInDOM += `<div class="mission">${completedData[i]}</div>`;
          dataInDOM += `</div>`;
          dataInDOM += `<div class="un-complete">`;
              dataInDOM += `<a href="#btnUncomplete" class="btnUncomplete" id="btnUncomplete-${i}">Un-complete</a>`;
          dataInDOM += `</div>`;
        dataInDOM += `</div>`;
      }
      $("#completedDisplay").html(dataInDOM);
	};	

	return newChatty;
}(JqueryTodo || {});

