const INCLUDE = [
    '**/*.js',
    '**/*.ts',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.html',
    '**/*.vue',
    '**/*.css',
    '**/*.scss',
    '**/*.sass',
    '**/*.less',
    '**/*.styl',
    '**/*.py',
    '**/*.php',
    '**/*.md'
  ];
  
 const EXCLUDE = [
    '**/node_modules/**',
    '**/bower_components/**',
    '**/dist/**',
    '**/out/**',
    '**/build/**',
    '**/.*/**'
  ];


  module.exports = {
      EXCLUDE,
      INCLUDE
  }