const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // Entry point for your library
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'index.js', // Output file name
    library: 'DesignSystem', // Global variable name for UMD builds
    libraryTarget: 'umd', // UMD module system (works for CommonJS, AMD, and as a global variable)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Compile TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.scss$/, // SASS files
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader',   // Translates CSS into CommonJS
          'sass-loader',  // Compiles SASS to CSS
        ],
      },
      
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the `dist` folder before each build,
  ],
  externals: {
    // Define external libraries that should not be bundled with your library
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  mode: 'production', // Set the mode to 'production' for optimizations
};
