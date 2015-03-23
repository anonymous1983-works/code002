var MELIS = {
  debug: true,
  active_key: 0,
  active_option: '',
  bodyLoader: 'body-content-loader',
  idBodyContentLoader :'id-maintabs',
  plugins: {
    tree: {
      id: "id-mod-menu-dynatree",
      debug: false,
      pathXhr: "xhr/json/tee.json",
      idItem: "id-mod-menu-dynatree-item-",
      classActive: "dynatree-active"
    },
    tabs: {
      home: {
        key: "home",
      },
      levelA: {
        idWrapLevelA: "id-wrap-maintabs-tabs",
        idLevelA: "id-mod-maintabs-tabs",
        iconeDefault: "tag",
        idItem: "id-mod-maintabs-tabs-item-"
      },
      levelB: {
        idWrapLevelB: "id-wrap-maintabs-tabs-options",
        idLevelB: "id-mod-maintabs-tabs-options"
      }
    },
    pages: {
      idItem: "id-maintabs-page"
    }
  }
};