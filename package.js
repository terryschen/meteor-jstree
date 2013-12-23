Package.describe({
  summary: "meteor packaged jstree (https://github.com/vakata/jstree)"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/dist/jstree.js', 'client');  
});
