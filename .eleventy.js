module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("Earth.svg");

    eleventyConfig.addPassthroughCopy("style.css");

    eleventyConfig.addPassthroughCopy("Moon.svg");
};