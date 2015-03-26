# ====================================
#   Activate Plugins
# ====================================

activate :automatic_image_sizes
activate :directory_indexes
activate :livereload
activate :syntax, css_class: 'syntax js-syntax'

activate :autoprefixer do | config |
  config.browsers = [ 'last 2 versions', 'Explorer >= 10' ]
  config.cascade  = false
end

# ====================================
#   Global Variables
# ====================================

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, footnotes: true, smartypants: true

set :links, data.links

set :css_dir,    'assets/stylesheets'
set :js_dir,     'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir,  'assets/fonts'

# ====================================
#   After Configuration
# ====================================

after_configuration do
  @bower_config = JSON.parse( IO.read( "#{ root }/.bowerrc" ) )
  sprockets.append_path File.join root.to_s, @bower_config[ 'directory' ]
end

# ====================================
#   Build Configuration
# ====================================

configure :build do
  activate :cache_buster
  activate :minify_css
  activate :minify_javascript
  activate :minify_html
  activate :relative_assets
end
