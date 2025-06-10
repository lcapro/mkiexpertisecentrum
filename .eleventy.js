module.exports = function(eleventyConfig) {
  // Ensure the global stylesheet is available in the generated site
  // by copying it from the source folder to the output root.
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
