var MELIS = {
  debug: true,
  active_key: 0,
  bodyLoader: 'body-content-loader',
  plugins: {
    tree: {
      id: "id-mod-menu-dynatree",
      debug: false,
      pathXhr: "xhr/json/tee.json",
      idItem: "id-mod-menu-dynatree-item-",
      classActive: "dynatree-active"
    },
    tabs: {
      home:{
        key: "home",
      },
      levelA: {
        idLevelA: "id-mod-maintabs-tabs",
        iconeDefault: "tag",
        idItem: "id-mod-maintabs-tabs-item-"
      },
      levelB: {
        idLevelB: "id-mod-maintabs-tabs-options"
      }
    },
    pages: {
      idItem: "id-maintabs-page"
    }
  }
};