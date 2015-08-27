# ====================================
#   Activate Plugins
# ====================================

activate :automatic_image_sizes
activate :directory_indexes
activate :livereload
activate :syntax, css_class: 'syntax js-syntax'

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 10']
  config.cascade = false
end

# ====================================
#   Global Variables
# ====================================

# ----- Configuration ----- #

set :markdown_engine, :kramdown
set :markdown, fenced_code_blocks: true, smartypants: true

Tilt::KramdownTemplate.send(:remove_const, :DUMB_QUOTES)
Tilt::KramdownTemplate.const_set(:DUMB_QUOTES, 'lsquo,rsquo,ldquo,rdquo')

# ----- Data ----- #

set :links, data.links

# ----- Paths ----- #

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

# ----- Site ----- #

set :title, 'John D. Jameson'

# ====================================
#   After Configuration
# ====================================

after_configuration do
  @bower_config = JSON.parse( IO.read( "#{ root }/.bowerrc" ) )
  sprockets.append_path File.join root.to_s, @bower_config['directory']

  system 'gulp build'
end

# ====================================
#   Build
# ====================================

configure :build do
  require 'uglifier'

  activate :asset_hash
  activate :minify_css
  activate :minify_html
  activate :minify_javascript, :compressor => ::Uglifier.new( output: { comments: :none } )
  activate :relative_assets
end
