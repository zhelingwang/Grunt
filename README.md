# Grunt
grunt basic operation

无论是Grunt/Gulp 还是webpack，都是通过npm来完成安装的，所以首先当然是在项目根目录执行命令npm init 生成package.json ，用于管理npm-packages ，最常用的是其中的三个字段，其余均是项目的备注信息，Dependencies/devDependencies/scripts，Dependencies是即使项目发布之后也要依赖的配置项，devDependencies则是在项目开发时才需要使用到的工具性质的配置项，而scripts是用于添加npm任务引导的。
Grunt自动构建工具，为了能在全局环境下执行grunt命令：

1.	全局安装grunt-cli工具，npm install –g grunt-cli

2.	将grunt作为devDependencies 在项目本地安装，npm install –save-dev grunt

3.	创建并配置 Gruntfile.js ，用于配置grunt 的各项执行任务，简要格式如下：
  a)	module.exports = function(grunt){……}
  b)	grunt.initConfig({……})，配置各个工具包的各项配置
  c)	加载使用的工具包，grunt.loadNpmTasks(……)
  d)	注册任务执行的命令，grunt.registerTask()


其它细节，直接去查阅官网即可。

