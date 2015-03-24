// define module
var DynatreeEvents = (function(window) {
  var testvar = 2,
    testfn = function() {
      console.log("testfn = " + testvar);
    },
    getIdMenuItem = function(key) {
      return MELIS.plugins.tree.idItem + key;
    },
    getIdLevelA = function(key) {
      return MELIS.plugins.tabs.levelA.idItem + key;
    },
    getIdPage = function(key) {
      return MELIS.plugins.pages.idItem + key;
    },
    templateItemLevelA = function(data, key, title) {
      var idMenuItem = getIdMenuItem(key),
        iconeTab = ($("#" + idMenuItem + " .item-tree").data("iconetab") != "") ? $("#" + idMenuItem + " .item-tree").data("iconetab") : MELIS.plugins.tabs.levelA.iconeDefault;
      return jQuery('<li/>', {
        id: getIdLevelA(key),
        class: 'active',
        'data-key': key,
        'data-showOptions': (data.hideOption == true) ? 'hide' : 'show',
        'data-defaultOptions': data.options[0],
        'data-typeload': data.typeload,
        'data-src': data.src,
        html: '<a class="glyphicons ' + iconeTab + '" data-key="' + key + '" data-href="#' + getIdPageFormKey(key) + '" data-toggle="tab">\
                  <i></i>' + title + '\
               </a>\
               <a class="close" data-key="' + key + '">Close</a>'
      });
    },
    templateItemLevelAActive = function(key) {
      $('#' + MELIS.plugins.tabs.levelA.idLevelA + ' ul li.active').removeClass('active');
      $('#' + MELIS.plugins.tabs.levelA.idLevelA + ' ul #' + getIdLevelA(key)).addClass('active');
    };
  return {
    initNicescrollRails: function() {
      $('.hasNiceScroll').getNiceScroll().resize();
    },
    onRender: function(node, event) {
      var key = node.data.key,
        id = getIdMenuItem(key);
      $(node.li).addClass(id).attr('id', id).attr('data-key', key);
      $(node.span.lastChild).attr('data-key', key);
      $("#" + MELIS.plugins.tree.idItem + MELIS.plugins.tabs.home.key + " > .dynatree-node").addClass(MELIS.plugins.tree.classActive);
      //MelisHelper.initNewItemMainTabs(MELIS.plugins.tabs.home.key, '#' + MELIS.plugins.tabs.levelA.idLevelA + ' ul #' + getIdLevelA(MELIS.plugins.tabs.home.key), node.data.options);
      return true;
    },
    onClick: function(node, event) {
      var key, title;
      MELIS.active_key = node.data.key;
      if (node.getEventTargetType(event) == 'title' || node.data.key == MELIS.plugins.tabs.home.key) {
        key = node.data.key;
        title = node.data.title;
        //MelisHelper.initNewItemMainTabs
        if ($('#' + getIdLevelA(key)).length) {
          templateItemLevelAActive(key);
          $('#' + MELIS.plugins.tabs.levelA.idLevelA + ' ul #' + getIdLevelA(key)).show();
        } else {
          $('#' + MELIS.plugins.tabs.levelA.idLevelA + ' ul').append(templateItemLevelA(node.data, key, title));
          MelisHelper.initNewItemMainTabs(key, '#' + MELIS.plugins.tabs.levelA.idLevelA + ' ul #' + getIdLevelA(key), node.data.options);
          // Bind event close
          $('#' + MELIS.plugins.tabs.levelA.idLevelA + ' ul #' + getIdLevelA(key)).find('a.close').bind("click", function(event) {
            $('#' + MELIS.plugins.tabs.levelA.idLevelA + ' ul #' + getIdLevelA(key)).hide();
            if ($('#' + MELIS.plugins.tabs.levelA.idLevelA + ' ul #' + getIdLevelA(key)).hasClass('active')) {
              templateItemLevelAActive(MELIS.plugins.tabs.home.key);
            }
          });
          templateItemLevelAActive(key);
        }
        MelisHelper.initShowOptions(node.data.options);
        return false; // Prevent default processing
      }
    },
    onLazyRead: function() {
      return false;
    },
    onExpand: function() {
      return false;
    }
  };
})(window);