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

  def page_title
    if current_page.data.title
      "#{ current_page.data.title } | #{ title }"
    else
      title
    end
  end

  def pretty_date(date)
    date.strftime('%B %d, %Y')
  end

end
