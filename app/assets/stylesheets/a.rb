array = [1, 2, 3, 4, 5].map do |el|
  if el.odd?
    el
  end
end.compact!
