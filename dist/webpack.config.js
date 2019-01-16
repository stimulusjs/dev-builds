"use strict";
var path = require("path");
module.exports = {
    entry: {
        main: "./index.js"
    },
    output: {
        filename: "[name].js"
    },
    mode: "production",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: "ts-loader" }
                ]
            },
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ],
                use: [
                    { loader: "babel-loader" }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: ["src", "node_modules"]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi93ZWJwYWNrLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRTVCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsWUFBWTtLQUNuQjtJQUVELE1BQU0sRUFBRTtRQUNOLFFBQVEsRUFBRSxXQUFXO0tBQ3RCO0lBRUQsSUFBSSxFQUFFLFlBQVk7SUFDbEIsT0FBTyxFQUFFLG1CQUFtQjtJQUU1QixNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUU7WUFDTDtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUU7b0JBQ0gsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO2lCQUN4QjthQUNGO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLGNBQWM7aUJBQ2Y7Z0JBQ0QsR0FBRyxFQUFFO29CQUNILEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRTtpQkFDM0I7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLEVBQUU7UUFDUCxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQzFCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUM7S0FDakM7Q0FDRixDQUFBIn0=