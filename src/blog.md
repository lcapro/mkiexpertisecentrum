---
title: Blog
layout: layout.njk
permalink: /blog/
---

# Blog

Hier vind je inzichten, opinies en updates over MKI en duurzaam aanbesteden.

{% for post in collections.blog | reverse %}
- [{{ post.data.title }}]({{ post.url }}) – {{ post.date | date: "%d-%m-%Y" }}
{% endfor %}
