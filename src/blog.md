---
layout: layout.njk
title: Blog
---

# Blog

{% for post in collections.blog %}
- [{{ post.data.title }}]({{ post.url }}) – {{ post.date | date("dd-MM-yyyy") }}
{% endfor %}
