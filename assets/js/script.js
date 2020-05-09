'use strict';

window.onload = function () {
    var drops = document.querySelectorAll(".drop");
    var tasks = document.querySelectorAll(".drag-btn li a");
    var signal = document.querySelector("#signal");
    var start = document.querySelector('.start');
    var restart = document.querySelector('.restart');
    var dragIteams;

    // debugger;
    start.addEventListener('click', runDrag_Drop);
    function runDrag_Drop() {
        // alert("hii");
        if (start.innerHTML == "start") {
            start.innerHTML = "stop";
            signal.style.backgroundColor = "#2ecc71";
            for (var i = 0; i < tasks.length; i++) {
                tasks[i].draggable = true;
                tasks[i].addEventListener('dragstart', dragStart);  // here we select the task to drag
                function dragStart() {
                    dragIteams = this;
                    setTimeout(function () {
                        dragIteams.classList.add('hide');
                        console.log(" drag event start");
                    }, 0);
                }

                tasks[i].addEventListener('dragend', dragEnd); // here we end the task to drag
                function dragEnd() {
                    dragIteams = this;
                    setTimeout(function () {
                        dragIteams.classList.remove('hide');
                        console.log(" drag event end");
                    }, 0);
                }
            }

            for (var dropBox of drops) {
                dropBox.addEventListener('dragover', dragOver);
                dropBox.addEventListener('dragenter', dragEnter);
                dropBox.addEventListener('dragleave', dragLeave);
                dropBox.addEventListener('drop', Drop);
            }

            function dragOver(e) {  //without prevent the drag events is not showing.
                e.preventDefault();
                console.log("dragOver event end");
            }

            function dragEnter() {
                console.log("dragEnter event end");
                this.classList.add('bgcolor');
            }

            function dragLeave() {
                console.log("dragLeave event end");
            }

            function Drop() {
                this.append(dragIteams);     //we append/dop the one-by-one li events to drop class.
                console.log("Drop event end");
            }
        }
        else if (start.innerHTML == "stop") {
            start.innerHTML = "start";
            signal.style.backgroundColor = "red";
            for (var i = 0; i < tasks.length; i++) {
                tasks[i].draggable = false;
            }
        }
    };

    restart.addEventListener('click', function () {
        window.location.reload();
    });
}