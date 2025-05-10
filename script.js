let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("column1");
let rightBox = document.getElementById("column2");
let thirdBox = document.getElementById("column3");
let fourthBox = document.getElementById("column4");
let fifthBox = document.getElementById("column5");
let sixthBox = document.getElementById("column6");
let seventhBox = document.getElementById("column7");
let eighthBox = document.getElementById("column8");
let ninthBox = document.getElementById("column9");
let tenthBox = document.getElementById("column10");
let eleventhBox = document.getElementById("column11");
let twelfthBox = document.getElementById("column12");
let miniCol1 = document.getElementById("miniColumn1");

for (list of lists){
  list.addEventListener("dragstart",function(e){
    let selected = e.target;
    // const data = event.dataTransfer.getData("text");
    // const draggedElement = document.getElementById(data);
    rightBox.addEventListener("dragover", function(e){
      e.preventDefault();

    });
    rightBox.addEventListener("drop", function(e){
      rightBox.appendChild(selected);
      selected = null;
      saveState();
    });

    leftBox.addEventListener("dragover", function(e){
      e.preventDefault();

    });
    leftBox.addEventListener("drop", function(e){
      leftBox.appendChild(selected);
      selected = null;
      saveState();
    });
    thirdBox.addEventListener("dragover", function(e){
      e.preventDefault();

    });
    thirdBox.addEventListener("drop", function(e){
      thirdBox.appendChild(selected);
      selected = null;
      saveState();
    });

    fourthBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    fourthBox.addEventListener("drop", function(e){
      fourthBox.appendChild(selected);
      selected = null;
      saveState();
    });

    fifthBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    fifthBox.addEventListener("drop", function(e){
      fifthBox.appendChild(selected);
      selected = null;
      saveState();
    });

    sixthBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    sixthBox.addEventListener("drop", function(e){
      sixthBox.appendChild(selected);
      selected = null;
      saveState();
    });

    seventhBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    seventhBox.addEventListener("drop", function(e){
      seventhBox.appendChild(selected);
      selected = null;
      saveState();
    });

    eighthBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    eighthBox.addEventListener("drop", function(e){
      eighthBox.appendChild(selected);
      selected = null;
      saveState();
    });

    ninthBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    ninthBox.addEventListener("drop", function(e){
      ninthBox.appendChild(selected);
      selected = null;
      saveState();
    });

    tenthBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    tenthBox.addEventListener("drop", function(e){
      tenthBox.appendChild(selected);
      selected = null;
      saveState();
    });

    eleventhBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    eleventhBox.addEventListener("drop", function(e){
      eleventhBox.appendChild(selected);
      selected = null;
      saveState();
    });

    twelfthBox.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    twelfthBox.addEventListener("drop", function(e){
      twelfthBox.appendChild(selected);
      selected = null;
      saveState();
    });

    miniCol1.addEventListener("dragover", function(e){
      e.preventDefault();
    });
    miniCol1.addEventListener("drop", function(e){
      miniCol1.appendChild(selected);
      selected = null;
      saveState();
    });

  });//end of list event listener

}

//save state
function saveState() {
    const columns = document.querySelectorAll('.column');
    const state = {};
    columns.forEach(column => {
        const items = Array.from(column.children).map(item => item.id);
        state[column.id] = items;
    });
    localStorage.setItem('dragDropState', JSON.stringify(state));
}

//load state
function loadState() {
    const state = JSON.parse(localStorage.getItem('dragDropState'));
    if (state) {
        for (const columnId in state) {
            const column = document.getElementById(columnId);
            state[columnId].forEach(itemId => {
                const item = document.getElementById(itemId);
                if (item) {
                    column.appendChild(item);
                }
            });
        }
    }
}

// Load state on page load
window.onload = loadState;
