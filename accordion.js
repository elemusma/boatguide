  var acc = document.getElementsByClassName("accordion");
  var t;

  for (t = 0; t < acc.length; t++) {
    acc[t].addEventListener("click", function() {
      this.classList.toggle("open-accordion");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

//   // Reference the parent of all .accordion
// var main = document.querySelector('main');
//
// /* Register main to click events...
// || when main or any of its descendant elements are clicked...
// */
// main.addEventListener("click", function(e) {
//
//   /* Collect all .accordion into a NodeList and convert it into
//   || an array.
//   */
//   var acc = Array.from(document.querySelectorAll(".accordion"));
//
//   /* Loop thru each .accordion  to remove the .active class
//   || from each .panel
//   */
//   for (let a = 0; a < acc.length; a++) {
//     var panel = acc[a].nextElementSibling;
//     panel.classList.remove('active');
//   }
//   /* After nothing has class .active, assign .active to the
//   || .panel of the clicked element (e.target)
//   */
//   if (e.target !== e.currentTarget) {
//     var tgt = e.target.nextElementSibling;
//     tgt.classList.add("active");
//   }
// });


  // var panels = document.getElementsByClassName("accordion")
  // for (var i = 0; i < panels.length; i++) {
  //   panels[i].addEventListener("click", displayPanel);
  // }
  // function displayPanel () {
  //   var selectedPanel = this.nextElementSibling;
  //   if (selected)
  //   selectedPanel.style.display = "block";
  // }

  // what are the javascript functions necessary to create an accordion

  // var acc = document.getElementsByClassName("accordion");
  // var panel = document.getElementsByClassName('panel');
  //
  // for (var i = 0; i < acc.length; i++) {
  //   acc[i].onclick = function() {
  //     var setClasses = !this.classList.contains('open');
  //     setClass(acc, 'open', 'remove');
  //     setClass(panel, 'show', 'remove');
  //
  //     if (setClasses) {
  //       this.classList.toggle("open");
  //       this.nextElementSibling.classList.toggle("show");
  //     }
  //   }
  // }
  //
  // function setClass(els, className, fnName) {
  //   for (var i = 0; i < els.length; i++) {
  //     els[i].classList[fnName](className);
  //   }
  // }
  //
