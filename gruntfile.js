'use strict';
var path = require('path');

module.exports = function(grunt) {
	// Do grunt-related things in here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'expanded'
				}
			}
		},
	    watch: {
	    	options: { livereload: true },
	      	html: {
	      		files: ['index.html', '**/*.html', '**/*.js', '**/*.css'  ],
	      	}
	    },
	    bumpup: {
	        file: 'package.json'
	    },
		connect: {
			server: {
				options: {
					port: 9005,
					base: '',
					hostname: '*',
					livereload:true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-bumpup');
	grunt.task.registerTask('default', ['connect','watch']);

};