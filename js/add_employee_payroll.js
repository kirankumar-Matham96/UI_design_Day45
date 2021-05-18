class EmployeePayrollData {
  // id;
  // name;
  // profilePic;
  // gender;
  // department;
  // salary;
  // startDate;
  // note;

  /**
   * constructor for the class
   * @param  {...any} params
   */
  constructor /*EmployeePayrollData*/(...params) {
    this.name = params[0];
    this.profilePic = params[1];
    this.gender = params[2];
    this.department = params[3];
    this.salary = params[4];
    this.startDate = params[5];
    this.note = params[6];
  }

  get name() {
    return this._name;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "name is invalid";
    }
  }

  get profilePic() {
    return this._profilePic;
  }

  /**
   * @param {any} profilePic
   */
  set profilePic(profilePic) {
    this._profilePic = profilePic;
  }

  get gender() {
    return this._gender;
  }

  /**
   * @param {any} gender
   */
  set gender(gender) {
    this._gender = gender;
  }

  get department() {
    return this._department;
  }

  set department(department) {
    this._department = department;
  }

  get salary() {
    return this._salary;
  }

  /**
   * @param {any} salary
   */
  set salary(salary) {
    this._salary = salary;
  }

  get startDate() {
    return this._startDate;
  }

  /**
   * @param {any} startDate
   */
  set startDate(startDate) {
    //need to add date range condition
    let currentDate = new Date();
    let systemDay = currentDate.getDay();
    let systemMonth = currentDate.getMonth();
    let systemYear = currentDate.getFullYear();

    this._startDate = startDate;
  }

  get note() {
    return this._note;
  }

  /**
   * @param {any} note
   */
  set note(note) {
    this._note = note;
  }

  toString() {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const empDate = !this._startDate
      ? "undefined"
      : this._startDate.toLocaleDateString("en-US", options);
    return (
      "id=" +
      this._id +
      ", name=" +
      this._name +
      ", gender=" +
      this._gender +
      ", profile pic=" +
      this._profilePic +
      ", department=" +
      this._department +
      ", salary=" +
      this._salary +
      ", start date=" +
      empDate +
      ", note=" +
      this._note
    );
  }
}
