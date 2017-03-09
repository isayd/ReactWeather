var webpack = require('webpack');

module.exports = {
  //Where webpack starts to process the code
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
    //Provide a set of key values pairs, the key is the module name and the
    //value is the variable name we wan available inside of our externals
    // script files
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ],
  //output from webpack
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    //Creation of custum package names (Webpack alias)!!
    //Specify where is the creation of a custom pachake is gonna happen
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      applicationStyles: 'app/styles/app.scss'
    },

    //List of file extensions we will be able to process
    extensions: ['', '.js','.jsx']
  },

  //add babel-loadar so webpack supports jsx files
  module: {
    loaders: [
      {
        // we are telling the babel-loadar to take our files
        // parse files trought react and
        // take the output run them trought es2015
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015']
        },
        //specify wich files to get
        test: /\.jsx?$/,
        //specify wich folders we dont want to be parsed
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool:'cheap-module-eval-source-map'
};
