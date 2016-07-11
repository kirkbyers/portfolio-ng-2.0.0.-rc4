import 'core-js/es6';
import 'reflect-metadata';
import 'zone.js/dist/zone';
declare var process: any;

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity;
  // import 'zone.js/dist/long-stack-trace-zone';
}
