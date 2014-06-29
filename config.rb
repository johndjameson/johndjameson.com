activate :automatic_image_sizes
activate :directory_indexes
activate :livereload

# Methods defined in the helpers block are available in templates
helpers do
  def get_posts
    sitemap.resources.select { |resource| resource.data.type == 'post' }
      .sort_by { |resource| resource.data.date }
      .reverse
  end

  def pretty_date(date)
    date.strftime('%B %d, %Y')
  end
end

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end
