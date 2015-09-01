
import StartupBuilder from './startupbuilder';

class Startup extends StartupBuilder {
  constructor () {
    console.log("true", true);
    super();
  }
}

let s = new Startup();
