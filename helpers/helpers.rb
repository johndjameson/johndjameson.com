# ====================================
#   Helpers
# ====================================

module Helpers

  def codepen(options={})
    options[:height] ||= 300
    options[:pen]    ||= 'bpxrxB'
    options[:tabs]   ||= 'results'
    options[:theme]  ||= '23596'
    options[:user]   ||= 'johndjameson'

    partial 'shared/codepen', locals: options
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
