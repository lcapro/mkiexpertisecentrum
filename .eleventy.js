module.exports = function(eleventyConfig) {
  // Voeg deze regel toe om afbeeldingen mee te nemen naar _site
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addPassthroughCopy({
    'src/css/style.css': 'style.css'
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "_site"
    }
  };
};
