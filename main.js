
import StartupBuilder from './startupbuilder';

class Startup extends StartupBuilder {
  constructor () {
    super();
  }

  create () {
    let company = this.getRandomCompany();
    let domain = this.getRandomDomain();

    return `This is the new ${company} of ${domain} !`;
  }
}

let s = new Startup().create();
console.log (s);
