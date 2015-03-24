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
    var tag = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + "." + dt.getMilliseconds();
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
    log: function(mode, msg) {
      _log(mode, msg);
    },
    getIdMenuItem: function(key) {
      return MELIS.plugins.tree.idItem + key;
    },
    getIdLevelA: function(key) {
      return MELIS.plugins.tabs.levelA.idItem + key;
    },
    getIdPageFormKey: function(key) {
      return MELIS.plugins.pages.idItem + key;
    },
    getIdPage: function() {
      return MELIS.plugins.pages.idItem + '-key_' + MELIS.active_key + '-option_' + MELIS.active_option;
    },
    getIdMenuItemCurrent: function() {
      return MELIS.plugins.tree.idItem + MELIS.active_key;
    },
    getIdLevelACurrent: function() {
      return MELIS.plugins.tabs.levelA.idItem + MELIS.active_key;
    },
    getIdPageCurrent: function() {
      return MELIS.plugins.pages.idItem + MELIS.active_key;
    },
    getActiveCurrentItemLevelA: function() {
      if ($('#' + MELIS.plugins.tabs.levelA.idLevelA + " li#" + MelisHelper.getIdLevelACurrent()).data('option')) {
        MELIS.active_option = $('#' + MELIS.plugins.tabs.levelA.idLevelA + " li#" + MelisHelper.getIdLevelACurrent()).data('option');
      } else {
        MELIS.active_option = $('#' + MELIS.plugins.tabs.levelA.idLevelA + " li#" + MelisHelper.getIdLevelACurrent()).data('defaultoptions')
      }
      return true;
    },
    setActiveCurrentItemLevelB: function() {
      if (MelisHelper.getActiveCurrentItemLevelA()) {
        //console.log("setActiveCurrentItemLevelB :: " + MELIS.active_key + "     " + MELIS.active_option);
        $("#" + MELIS.plugins.tabs.levelB.idLevelB + " li.active").removeClass("active");
        $("#" + MELIS.plugins.tabs.levelB.idLevelB + " li[data-option=" + MELIS.active_option + "]").addClass("active");
      }
      
      MelisHelper.setActiveCurrentView();
    },
    setActiveCurrentView: function() {
      
      console.log("x");
      //$("#"+MELIS.idBodyContentLoader+' .'+MELIS.classNewPageInclude.commun).removeClass('active').hide();
      
      //$("#"+MELIS.idBodyContentLoader).append(MelisHelper.templateContent());
      
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
    templateContent: function() {
      
      /*var _typeload = $("#"+MelisHelper.getIdLevelACurrent()).data('typeload'),
      _src = $("#"+MelisHelper.getIdLevelACurrent()).data('src'),
      _class = '';

      switch(_typeload) {
        case 'iframe':
            _class = ' '+MELIS.classNewPageInclude.iframe+' ';
            break;
        case 'xhr':
            _class = ' '+MELIS.classNewPageInclude.xhr+' ';
            break;
        default:
            _class = ' '+MELIS.classNewPageInclude.iframe+' ';
      }

      return jQuery('<div/>', {
        id: MelisHelper.getIdPage(),
        class: 'active page-loaded '+_class,
        'data-key': MELIS.active_key,
        'data-option': MELIS.active_option,
        'data-typeload': _typeload,
        'data-src': _src,
        html: '<iframe name="myiframe" id="iframe-'+MelisHelper.getIdPage()+'" class="myiframe iframe-content" src="'+_src+'" width="'+$('#'+MELIS.idBodyContentLoader).width()+'px" height="'+$('#'+MELIS.idBodyContentLoader).height()+'px"></iframe>'
          //html: "<div>fff</div>"
      });*/
return "xxxx";
    },
    tempaleContentIframe: function(){
      return "<ifra"
    },
    initNewItemMainTabs: function(key, element, options) {
      $(element).on('click', function() {
        //MELIS.active_key = key;
        MELIS.active_key = key;
        MelisHelper.initItemDynatree(key);
        MelisHelper.initShowOptions(options);
      });
    },
    initItemDynatree: function(key) {
      $("#" + MELIS.plugins.tree.idItem + key).trigger('click');
      $("#" + MELIS.plugins.tree.id + " .dynatree-node." + MELIS.plugins.tree.classActive).removeClass(MELIS.plugins.tree.classActive);
      $("#" + MELIS.plugins.tree.idItem + key + " > .dynatree-node").addClass(MELIS.plugins.tree.classActive);
    },
    initActiveDynatree: function(key) {
      $("#" + MELIS.plugins.tree.idItem + key).trigger('click');
      $("#" + MELIS.plugins.tree.id + " .dynatree-node." + MELIS.plugins.tree.classActive).removeClass(MELIS.plugins.tree.classActive);
      $("#" + MELIS.plugins.tree.idItem + key + " > .dynatree-node").addClass(MELIS.plugins.tree.classActive);
    },
    initShowOptions: function(items) {
      if (items) {
        $("#" + MELIS.plugins.tabs.levelB.idWrapLevelB).show();
        $('body').removeClass("hide-levelB").addClass("show-levelB");
        $("#" + MELIS.plugins.tabs.levelB.idLevelB + " li").hide();
        var i = 0,
          ActiveCurrentItemLevelA = MelisHelper.getActiveCurrentItemLevelA();
        items.forEach(function(entry) {
          i++;
          $("#" + MELIS.plugins.tabs.levelB.idLevelB + " li[data-option=" + entry + "]").show();
        });
        //alert(MELIS.active_option);
        MelisHelper.setActiveCurrentItemLevelB();
      } else {
        $("#" + MELIS.plugins.tabs.levelB.idWrapLevelB).hide();
        $('body').removeClass("show-levelB").addClass("hide-levelB");
      }
      //MelisHelper.log(items);
    },
    initOptions: function() {
      $("#" + MELIS.plugins.tabs.levelB.idLevelB + " li").bind("click", function() {
        var entry = $(this).data('option');
        MELIS.active_option = entry;
        $('#' + MELIS.plugins.tabs.levelA.idLevelA + " li#" + MelisHelper.getIdLevelACurrent()).attr('data-option', entry);
        //MelisHelper.setActiveCurrentItemLevelB(entry);
      });
    }
  };
})(window);