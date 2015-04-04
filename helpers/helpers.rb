# ====================================
#   Helpers
# ====================================

module Helpers

  def get_posts
    sitemap.resources.select { |resource| resource.data.type == 'post' }
      .sort_by { |resource| resource.data.date }
      .reverse
  end

  def icon(name, options={})
    partial 'shared/icon', locals: { name: name }.merge(options)
  end

  def pretty_date(date)
    date.strftime('%B %d, %Y')
  end

end
