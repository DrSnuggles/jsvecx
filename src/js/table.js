var romTbl = (function(){
  var my = {
    tbl: null,
    data: [],
    filteredCol: 0,
    filteredVal: "",
    inc: "▲",
    dec: "▼"
  };

  my.init = function(tbl, dat){
    //console.log("init", tbl, dat);
    my.tbl = tbl;
    // attach head events
    var heads = tbl.getElementsByTagName("th");
    for (var i=0; i < heads.length; i++) {
      heads[i].innerHTML += '<span>'+my.inc+'</span>';
      heads[i].getElementsByTagName("input")[0].addEventListener("keyup", my.filt, false);
      heads[i].getElementsByTagName("span")[0].addEventListener("click", my.sort, false);
    }
    // attach body event
    tbl.getElementsByTagName("tbody")[0].addEventListener("click", my.sel, false);

    // fill table
    var thisYear = new Date();
    thisYear = thisYear.getYear() + 1900;
    for (var i in dat) {
      for (var j in dat[i]) {
        var rom = romList[i][j];
        var year = rom.match(/\d{4}/);
        if (rom.indexOf("_") !== -1) year = rom.split("_")[1].match(/\d{4}/); // look behind _
        if (i.match(/\d{4}/) && i.match(/\d{4}/).toString().length === 4) year = i.match(/\d{4}/); // use year from category
        if (year != year *1 || year.toString().length != 4 || year > thisYear) {
          // if it's still not found set empty
          year = "";
        }
        var name = rom.split("_")[0];
        var detail = rom.split("_")[1];
        if (typeof detail == "undefined") {
          detail = i;
        }
        detail = detail.replace("by ","");
        detail = detail.replace("(","");
        detail = detail.replace(")","");
        detail = detail.split(",")[0];
        detail = detail.replace(year, "");

        var author = i.replace(year, "");

        my.data.push([name, detail, author, year, rom]);
      }
    }

    console.log(my.data.length +" roms in list");
    // initial sort date desc
    // not for minify my.data.sort((a, b)=>{
    my.data.sort(function(a, b){
      if((a[3]+"").toLowerCase() < (b[3]+"").toLowerCase()){
        return 1;
      }
      return -1;
    });
    // initial sort order symbol
    tbl.getElementsByTagName("th")[3].getElementsByTagName("span")[0].innerText = my.dec;

    my.render();
  }
  my.sel = function(e){
    // walk up till tr
    var tr = e.target.parentElement;
    while (tr.tagName !== "TR"){
      tr = tr.parentElement; // should take care not to walk to far up
    }
    var rom = tr.getAttribute("rom");
    if (rom) {
      switchRom( rom );
    }
  }
  my.filt = function(e){
    //console.log("filter", e);
    var search = my.filteredVal = e.target.value.toLowerCase();
    var col = my.filteredCol = e.target.parentElement.cellIndex;
    // clear other filters
    var inps = my.tbl.getElementsByTagName("input");
    for (var i = 0; i < inps.length; i++) {
      if (i !== col) {
        inps[i].value = "";
      }
    }
    my.filterNow();
  }
  my.filterNow = function(){
    // loop through all lines
    var tr = my.tbl.getElementsByTagName("tr");
    for (var i = 1; i < tr.length; i++) { // 0 := header
      if (tr[i].children[my.filteredCol].innerText.toLowerCase().indexOf(my.filteredVal) !== -1) {
        // found
        tr[i].classList.remove("hide");
      } else {
        // not found
        tr[i].classList.add("hide");
      }
    }
  }
  my.sort = function(e){
    //console.log("sort", e);
    var col = e.target.parentElement.cellIndex;
    var inc = (e.target.innerText === my.dec) ? true : false;
    // change symbol
    if (inc) {
      e.target.innerText = my.inc;
    } else {
      e.target.innerText = my.dec;
    }

    // sort the extracted data
    if (inc) {
      //my.data.sort((a, b)=>{
      my.data.sort(function(a, b){
        if((a[col]+"").toLowerCase() > (b[col]+"").toLowerCase()){
          return 1;
        }
        return -1;
      })
    } else {
      my.data.sort(function(b, a){
        if((a[col]+"").toLowerCase() > (b[col]+"").toLowerCase()){
          return 1;
        }
        return -1;
      })
    }

    my.render();
  }
  my.render = function() {
    var html = [];
    for (var i = 0; i < my.data.length; i++) {
      html.push('<tr rom="'+ my.data[i][2] +'/'+ my.data[i][4] +'">');
      html.push('<td><div>'+ my.data[i][0] +'</div></td>');
      html.push('<td><div>'+ my.data[i][1] +'</div></td>');
      html.push('<td><div>'+ my.data[i][2].replace(/\ /g, "&nbsp;") +'</div></td>');
      html.push('<td><div>'+ my.data[i][3] +'</div></td>');
      html.push('</tr>');
    }
    my.tbl.getElementsByTagName("tbody")[0].innerHTML = html.join("");
    my.filterNow();
  }

  return my;
})();
