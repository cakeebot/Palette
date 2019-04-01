import browserify from "browserify";
import tsify from "tsify";

browserify()
  .add("./src/*")
  .plugin("tsify")
  .bundle()
  .pipe(process.stdout)