Package.describe({
  summary: "SlickGrid package for meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
      'lib/SlickGrid/slick.grid.css',
      'lib/jquery.event.drag.js',
      'lib/jquery.event.drop.js',
      'lib/SlickGrid/slick.core.js',
      'lib/SlickGrid/slick.grid.js',
    ]
    ,'client'
  );
});
