module.exports = {
    entry:'./app/app.jsx',
    output: {
        path: __dirname,
        filename:'./public/bundle.js'
    },
    resolve: {
    root:__dirname,
    alias: {
        Main: 'app/components/main.jsx',
        Navbar: 'app/components/navbar.jsx',
        Timer: 'app/components/timer.jsx',
        Counter: 'app/components/counter.jsx',
        Clock : 'app/components/clock.jsx',
        Countdown: 'app/components/countdown.jsx',
        Countdownform: 'app/components/countdownform.jsx'
    },
    extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                loader:'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test:/\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool : 'cheap-module-eval-source-map'
};