# Activate dependencies
activate :automatic_image_sizes
activate :directory_indexes
activate :livereload
activate :minify_html
activate :syntax, css_class: 'syntax js-syntax'

activate :autoprefixer do | config |
  config.browsers = 'last 2 versions'
  config.cascade  = false
end

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, footnotes: true, smartypants: true

# Define helpers
helpers do
  def get_posts
    sitemap.resources.select { | resource | resource.data.type == 'post' }
      .sort_by { | resource| resource.data.date }
      .reverse
  end

  def pretty_date( date )
    date.strftime( '%B %d, %Y' )
  end
end

# Alias directories
set :css_dir,    'assets/stylesheets'
set :js_dir,     'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir,  'assets/fonts'

# Bower
after_configuration do
  @bower_config = JSON.parse( IO.read( "#{ root }/.bowerrc" ) )
  sprockets.append_path File.join root.to_s, @bower_config[ 'directory' ]
end

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :cache_buster
  activate :relative_assets
end
