Package.describe({
  summary: "SlickGrid package for meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
      'lib/SlickGrid/slick-default-theme.css',
      'lib/SlickGrid/slick.grid.css',
      'lib/jquery.event.drag.js',
      'lib/jquery.event.drop.js',
      'lib/SlickGrid/slick.core.js',
      'lib/SlickGrid/slick.dataview.js',
      'lib/SlickGrid/slick.editors.js',
      'lib/SlickGrid/slick.formatters.js',
      'lib/SlickGrid/slick.groupitemmetadataprovider.js',
      'lib/SlickGrid/slick.grid.js',
      'lib/SlickGrid/slick.remotemodel.js'
    ]
    ,'client'
  );
});
