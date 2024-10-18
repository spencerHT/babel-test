const code = require("@babel/core").transformFileSync("script.ts", {
  presets: [
    ["@babel/preset-env", { 
      exclude: [
        'transform-typeof-symbol'
      ],
      bugfixes: true,
      corejs: undefined,
      targets: [
        'Chrome 75',
        'iOS 11'
      ],
      useBuiltIns: false,
      include: [
        '@babel/plugin-transform-class-properties'
      ]
    }],
    ["@babel/preset-typescript", { 
      isTSX: true,
      allExtensions: true,
      allowNamespaces: true,
      allowDeclareFields: true,
      optimizeConstEnums: true,
    }]
  ],
  filename: 'script.ts',
});
console.log(code.code); 