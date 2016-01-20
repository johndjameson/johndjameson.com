# ====================================
#   Helpers
# ====================================

module Helpers

  def codepen(pen, height=400)
    partial 'shared/codepen', locals: { pen: pen, height: height }
  end

  def get_posts
    sitemap.resources.select { |resource| resource.data.type == 'post' }
      .sort_by { |resource| resource.data.date }
      .reverse
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

  def prevent_widow(string)
    string.gsub(/(\s)([\S]*$)/, '&nbsp;\2')
  end

end
