const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'design-system-splitwave',
  },
  module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					transpileOnly: true
				}
			},
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader", options: { injectType: "styleTag" } },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-loader",
            options: {
              warnRuleAsWarning: true,
            },
          },
        ],
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
		]
	},
  optimization: {
    minimize: false, // Turn off minimization to prevent name mangling
  },
	resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
	},
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
    "styled-components": {
      root: "styled-components",
      commonjs2: "styled-components",
      commonjs: "styled-components",
      amd: "styled-components"
    }
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the `dist` folder before each build,
  ],
  mode: 'production',
};
