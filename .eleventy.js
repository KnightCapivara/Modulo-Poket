module.exports = function (config) {
    config.setTemplateFormats("njk");
    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/images/**/*");
    // config.addPassthroughCopy("src/favicon.ico");

    return {
        dir: {
            input: "src",
        },
    };
};