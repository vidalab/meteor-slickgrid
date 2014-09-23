Package.describe({
  name: "phuocd:slickgrid",
  summary: "SlickGrid package for meteor",
  version: "1.0.1",
  git: "https://github.com/vidalab/meteor-slickgrid.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
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
      'lib/SlickGrid/slick.remotemodel.js',
      'lib/SlickGrid/images/header-columns-bg.gif',
      'lib/SlickGrid/images/header-columns-over-bg.gif'
    ]
    ,'client'
  );
});
