
module.exports = {
    source: ["src/styles/tokens/**/*.json"],
    platforms: {
        css: {
            transformGroup: "css",
            buildPath: "src/styles/",
            files: [
                {
                    destination: "tokens-light.css",
                    format: "css/variables",
                    filter: (token) => {
                        // Include everything that is NOT strictly "Dark mode" source
                        // This includes base tokens (sizes, typo) and Light mode colors
                        return token.filePath.indexOf("Dark mode") === -1;
                    },
                    options: {
                        selector: ":root",
                    },
                },
                {
                    destination: "tokens-dark.css",
                    format: "css/variables",
                    filter: (token) => {
                        // Only include tokens from "Dark mode" files
                        return token.filePath.indexOf("Dark mode") > -1;
                    },
                    options: {
                        selector: ".dark-theme",
                    },
                },
            ],
        },
    },
};
