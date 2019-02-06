module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),
   // information: '//header text',
   // header: {
      //  dist: {
         //   options: {
          //      text: '<%= information %>'
         //   },
         //   files: {
             //   'dist/js/first.js': 'src/js/first.js'
           // }
       // }
    //}
    
    info: '//footer text',
    footer: {
       dist: {
            options: {
                text: '<%= info %>'
            },
            files: {
                'dist/js/second.js': 'src/js/second.js'

            }
       }
    }
    
    //uncomment to use header and footer

  });

  //grunt.loadNpmTasks('grunt-header');
  grunt.loadNpmTasks('grunt-footer');


 // grunt.registerTask('default', ['header']);
  grunt.registerTask('default', ['footer']);

};