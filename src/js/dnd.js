/*
  dnd.js - handles drop event
*/
(function() {
  var dropArea = window;

  function preventDefaults(e) {
    e.preventDefault();
  }
  function dropHandler(e) {
    var file = null;
    if (e.dataTransfer.items) {
      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          file = e.dataTransfer.items[i].getAsFile();
          break;
        }
      }
    } else {
      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        file = e.dataTransfer.files[i];
        break;
      }
    }

    if (file) {
      if (file.size <= 100 * 1024) /* 100kb max */ {
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        stat.innerText = "Processing file...";
        reader.onloadend = function() {
          stat.innerText = "Processing completed.";
          Globals.cartdata = reader.result;
          roms.selectedIndex = 0;
          switchRom([null, null, "none", "none"]);
        }
      } else {
        stat.innerText = "File too large.";
      }
    }
  }

  // preventDefaults on all drag related events
  dropArea.addEventListener("drop", preventDefaults, false);
  dropArea.addEventListener("dragdrop", preventDefaults, false);
  dropArea.addEventListener("dragenter", preventDefaults, false);
  dropArea.addEventListener("dragleave", preventDefaults, false);
  dropArea.addEventListener("dragover", preventDefaults, false);

  // handler on drop
  dropArea.addEventListener("drop", dropHandler, false);
  dropArea.addEventListener("dragdrop", dropHandler, false);

})();
