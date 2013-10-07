set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'


# Build-specific configuration
configure :build do

  activate :bourbon
  activate :neat
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  activate :gzip
  #activate :directory_indexes
  #activate :image_optim

  # Or use a different image path
  # set :http_path, "/Content/images/"

end
