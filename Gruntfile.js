module.exports = function(grunt){

	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{},
			files:{
				src:['src/*.js'],
				dest:"build/guan.js"
			}
		},
		wiredep:{
			task:{
				src:['app/index.html','index.html'],
				options:{}
			}
		},
		sass:{
			dist:{
				options:{
					style:'compressed'
				},
				files:{
					'./build/main.css':'./src/main.scss',
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-wiredep");
	grunt.loadNpmTasks("grunt-contrib-sass");

	grunt.registerTask("default",['uglify','sass']);


}