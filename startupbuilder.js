
import fs from 'fs';

export default class StartupBuilder {

  constructor () {
    this.file = fs
                .readFileSync('./README.md')
                .toString()
                .split('\n')
                .map((line) => line.trim());

    this.companyIndex = this.file.indexOf('## The:');
    this.domainIndex = this.file.indexOf('## Of:');

    this.companies = (() => {
      var result = [];
      this.file.forEach((line, index) => {
        if (index > this.companyIndex &&
            index < this.domainIndex &&
            line[0] === '-')
            result.push(line.replace('-', '').trim());
      });
      return result;
    })();

    this.domains = (() => {
      var result = [];
      this.file.forEach((line, index) => {
        if (index > this.domainIndex &&
            line[0] === '-')
            result.push(line.replace('-', '').trim());
      });
      return result;
    })();
  }

  getRandomCompany () {
    return this.companies[Math.floor(Math.random() * this.companies.length - 1)];
  }

  getRandomDomain () {
    return this.domains[Math.floor(Math.random() * this.domains.length - 1)];
  }
}
