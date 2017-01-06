var chalk = require('chalk');    //不同颜色的info
var yosay = require('yosay');    //yeoman弹出框<Paste>
var yeoman = require('yeoman-generator');
var fs = require('fs');

var baseconfig = yeoman.Base.extend({
     prompting: function () {
        return this.prompt([{
          type    : 'input',
          name    : 'name',
          message : 'Your project name',
          default : this.appname // Default to current folder name
        }, {
          type    : 'confirm',
          name    : 'cool',
          message : 'Would you like to enable the Cool feature?'
        }]).then(function (answers) {
          this.log('app name', answers.name);
          this.log('cool feature', answers.cool);
        }.bind(this));
    },
    info: function() {
        this.log(chalk.green(
            'I am going to build your app!'
        ));
    },
    install : function () {
         this.npmInstall([
            'babel-preset-es2015',
            'babel-plugin-transform-es2015-modules-umd',
            'chai',
            'karma',
            'mocha',
            'karma-babel-preprocessor',
            'karma-chai',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-mocha',
            'karma-mocha-reporter'
            ], { 'save-dev': true });
    },
    generateBasic: function() {  //按照自己的templates目录自定义

        var flag = '.es6';

        // 目录
        ['src','test'].forEach(function(el,index){
            this.directory(el + flag , el);
        },this);

        var files = {
            'karma.conf.js.es6' : 'karma.conf.js',
            'package.json':'package.json',
        };

        // 文件
        for(var i in files){
            this.copy(i ,files[i]);
        }

    },
    end: function() {
        this.log(yosay(
            'Your app has been created successfully!'
        ));
    }
});
module.exports = baseconfig;
