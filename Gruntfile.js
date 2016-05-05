module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     uglify: {
      build:{
        src:'src/js/jquery.chris_carousel.js',
        dest:'dest/js/script.min.js'
      },
    },
      sass: {
      dist: {
        files: {
          'dest/css/main.css':'src/css/global.scss',
        },
      },
    },
    watch: {
      scripts: {
<<<<<<< HEAD
        files: ['dest/css/main.scss'],
=======
        files: ['dest/scss/main.scss'],
>>>>>>> 0a20f917e274eeec74154a22e12d690a09750dd6
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
<<<<<<< HEAD
          cwd: 'src/images/',                // Src matches are relative to this path
=======
          cwd: 'images/',                // Src matches are relative to this path
>>>>>>> 0a20f917e274eeec74154a22e12d690a09750dd6
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dest/images'        // Destination path prefix
        }]
      },
    },
    jslint: { // configure the task 
      // lint your project's server code 
      server: {
        src: [ // some example files 
          'src/js/jquery.chris_carousel.js',
          ]
        }
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-jslint');

  // Default task(s).
  grunt.registerTask('default',['uglify:build','sass']);
  grunt.registerTask('watch',['watch']);
  grunt.registerTask('image',['imagemin']);
  grunt.registerTask('lint',['jslint']);
};