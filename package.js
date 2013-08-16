Package.describe({
  summary: "SlickGrid package for meteor"
});

Package.on_use(function (api) {
  api.add_files([
    'lib/SlickGrid/slick.grid.js']
    ,'client'
  );
});
