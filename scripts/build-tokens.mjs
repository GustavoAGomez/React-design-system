
import StyleDictionary from "style-dictionary";

// Light Mode Build
console.log("Building Light Mode...");
const StyleDictionaryLight = new StyleDictionary({
    source: [
        "src/styles/tokens/**/*.json",
        "!src/styles/tokens/**/*Dark mode.json" // Exclude Dark mode
    ],
    platforms: {
        css: {
            transformGroup: "css",
            buildPath: "src/styles/",
            files: [
                {
                    destination: "tokens-light.css",
                    format: "css/variables",
                    options: {
                        selector: ":root",
                    },
                },
            ],
        },
    },
});

await StyleDictionaryLight.buildAllPlatforms();


// Dark Mode Build
console.log("\nBuilding Dark Mode...");
const StyleDictionaryDark = new StyleDictionary({
    source: [
        "src/styles/tokens/**/*Dark mode.json" // Only Dark mode
    ],
    platforms: {
        css: {
            transformGroup: "css",
            buildPath: "src/styles/",
            files: [
                {
                    destination: "tokens-dark.css",
                    format: "css/variables",
                    options: {
                        selector: ".dark-theme",
                    },
                },
            ],
        },
    },
});

await StyleDictionaryDark.buildAllPlatforms();
