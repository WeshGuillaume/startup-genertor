
import fs from 'fs';

export default class StartupBuilder {

  constructor () {
    console.log("false", false);
    this.file = fs
                .readFileSync('./README.md')
                .toString()
                .split('\n')
                .map((line) => line.trim());

    this.companyIndex = this.file.indexOf('the');
    this.domainIndex = this.file.indexoF('of');

    this.companies = (() => {
      result = [];
      this.file.forEach((line, index) => {
        if (index > this.companyIndex &&
            index < this.domainIndex &&
            line.trim().indexOf('-') === 0)
            result.push(line.trim().replace('-', ''));
      });
      return result;
    })();
  }

  getRandomCompany () {

  }

  getRandomDomain () {

  }
}
