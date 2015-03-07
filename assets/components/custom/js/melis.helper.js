// define module
var MelisHelper = (function(window) {
  var testvar = 2,
    testfn = function() {
      console.log("testfn = " + testvar);
    };
  var _canLog = MELIS.debug;

  function _log(mode, msg) {
    /**
     * Usage: logMsg("%o was toggled", this);
     */
    if (!_canLog) {
      return;
    }
    // Remove first argument
    var args = Array.prototype.slice.apply(arguments, [1]);
    // Prepend timestamp
    var dt = new Date();
    var tag = dt.getHours() + ":" + dt.getMinutes() + ":" +
      dt.getSeconds() + "." + dt.getMilliseconds();
    args[0] = tag + " - " + args[0];

    try {
      switch (mode) {
        case "info":
          window.console.info.apply(window.console, args);
          break;
        case "warn":
          window.console.warn.apply(window.console, args);
          break;
        case "error":
          window.console.error.apply(window.console, args);
          break;
        default:
          window.console.log.apply(window.console, args);
          break;
      }
    } catch (e) {
      if (!window.console) {
        _canLog = false; // Permanently disable, when logging is not supported by the browser
      } else if (e.number === -2146827850) {
        // fix for IE8, where window.console.log() exists, but does not support .apply()
        window.console.log(args.join(", "));
      }
    }
  }
  return {
    log: function(mode, msg){
      _log(mode, msg);
    },
    initTinymce: function() {
      tinymce.init({
        selector: "h1.editable",
        inline: true,
        toolbar: "undo redo",
        menubar: false
      });
      tinymce.init({
        selector: "div.editable",
        inline: true,
        plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table contextmenu paste"],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
      });
    },
    initNewItemMainTabs: function(key, element, options){
      $(element).on('click', function(){
        //MELIS.active_key = key;
        MelisHelper.initShowOptions(options);
        MELIS.active_key = key;
        $("#"+MELIS.plugins.tree.idItem+key).trigger('click'); 
        $("#"+MELIS.plugins.tree.id+" .dynatree-node."+MELIS.plugins.tree.classActive).removeClass(MELIS.plugins.tree.classActive);
        $("#"+MELIS.plugins.tree.idItem+key+" > .dynatree-node").addClass(MELIS.plugins.tree.classActive);
        
      })
    },
    initShowOptions: function(items){
      //MelisHelper.log(items);
      $("#"+MELIS.plugins.tabs.levelB.idLevelB+" li").hide();
      items.forEach(function(entry) {
        $("#"+MELIS.plugins.tabs.levelB.idLevelB+" li[data-option="+entry+"]").show();
      });
    },
    initActiveDynatree: function(key){
      $("#"+MELIS.plugins.tree.idItem+key).trigger('click'); 
        $("#"+MELIS.plugins.tree.id+" .dynatree-node."+MELIS.plugins.tree.classActive).removeClass(MELIS.plugins.tree.classActive);
        $("#"+MELIS.plugins.tree.idItem+key+" > .dynatree-node").addClass(MELIS.plugins.tree.classActive);
    },
    initOptions: function(){
      ("#"+MELIS.plugins.tabs.levelB.idLevelB+" li").bind("click", function(){
        var entry = $(this).data('option');
        console.log(entry);
      });
    }
  };
})(window);