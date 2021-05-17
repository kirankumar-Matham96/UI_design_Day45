class EmployeePayrollData {
  //properties
  id;
  name;
  salary;
  gender;
  startDate;
  pinCode;
  email;

  //constructor
  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }

  /**
   * getters and setters:
   * while using setters and getters, we need to use '_' before every variable
   */

  //getters
  getId() {
    return this._id;
  }

  getName() {
    return this._name; //'-' used before variable 'name': must (syntax)
  }

  getSalary() {
    return this._salary;
  }

  getGender() {
    return this._gender;
  }

  getPinCode() {
    return this._pinCode;
  }

  getEmail() {
    return this._email;
  }

  //setters
  setId(id) {
    let idRegex = RegExp("^[1-9]{1}[0-9]{2,}$");
    if (idRegex.test(id)) {
      this.id = id;
    } else {
      throw "INCORRECT ID!";
    }
  }

  setName(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$"); //not working
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Incorrect name";
    }
  }

  setSalary(salary) {
    let salaryRegex = RegExp("^[1-9]{1}[0-9]{2,}$");
    if (salaryRegex.test(salary)) {
      this._salary = salary;
    } else {
      throw "INCORRECT SALARY!";
    }
  }

  setGender(gender) {
    let genderRegex = RegExp("(M|F)");
    if (genderRegex.test(gender)) {
      this._gender = gender;
    } else {
      throw "INCORRECT GENDER!";
    }
  }

  setStartDate(startDate) {
    this._startDate = startDate;
  }

  setPinCode(pinCode) {
    let pinRegex = RegExp("^[1-9]{1}[0-9]{2,6}$");
    if (pinRegex.test(pinCode)) {
      this._pinCode = pinCode;
    } else {
      throw "INVALID PINCODE!";
    }
  }

  setEmail(email) {
    let emailRegex = RegExp(
      "^(?!\\.)[A-Za-z0-9]+([._%+-]?[0-9])*@[A-Za-z0-9-]+\\.[a-zA-Z]{2,}(\\.[A-Za-z]{2,})?$"
    );
    if (emailRegex.test(email)) {
      this._email = email;
    } else {
      throw "Invalid email!";
    }
  }

  //toString
  toString() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const empDate =
      this.startDate === undefined
        ? "undefined"
        : this.startDate.toLocaleDateString("en-US", options); //see toLocaleDateString
    return (
      "id = " +
      this.id +
      ", name = " +
      this.name +
      ", gender = " +
      this.gender +
      ", salary = " +
      this.salary +
      ", Date started = " +
      empDate
    );
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Me", 5000000); //inserting data
console.log(employeePayrollData);
employeePayrollData.setName("mememe"); //modifying name
employeePayrollData.setid(0123); //throws incorrect id exception
console.log(employeePayrollData);

//new employee
let employeePayrollData1 = new EmployeePayrollData(
  2,
  "Terisa",
  3000000,
  "F",
  new Date()
);
console.log(employeePayrollData1);
