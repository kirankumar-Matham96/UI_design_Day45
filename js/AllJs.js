window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const nameError = document.querySelector(".name-error");
  name.addEventListener("input", function () {
    if (name.value.length === 0) {
      nameError.textContent = "";
      return;
    } else {
      try {
        const nameInstance = new EmployeePayrollData();
        nameInstance.name = name.value;
        nameError.textContent = "";
      } catch (e) {
        nameError.textContent = e;
      }
    }
  });

  const salary = document.querySelector("#salary");
  const salaryOutput = document.querySelector(".salary-output-text");
  salaryOutput.textContent = salary.value;
  salary.addEventListener("input", function () {
    salaryOutput.textContent = salary.value;
  });
});

const save = () => {
  try {
    let employeePayrollData = createEmployeePayroll();
    createAndUpdateStorage(employeePayrollData);
  } catch (e) {
    return;
  }
};

function createAndUpdateStorage(employeePayrollData) {
  let employeePayrollList = JSON.parse(
    localStorage.getItem("EmployeePayrollList")
  );

  if (employeePayrollList != undefined) {
    employeePayrollList.push(employeePayrollData);
  } else {
    employeePayrollList = [employeePayrollData];
  }
  alert(employeePayrollList.toString());
  localStorage.setItem(
    "EmployeePayrollList",
    JSON.stringify(employeePayrollList)
  );
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try {
    employeePayrollData.name = getInputValueById("#name");
  } catch (e) {
    setTextValue(".text-error", e);
    throw e;
  }
  employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
  employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
  employeePayrollData.department = getSelectedValues("[name=department]").pop();
  employeePayrollData.salary = getInputValueById("#salary");
  employeePayrollData.note = getInputValueById("#notes");
  let date =
    getInputValueById("#day") +
    "" +
    getInputValueById("#month") +
    "" +
    getInputValueById("#year");
  employeePayrollData.date = Date.parse(date);
  alert(employeePayrollData.toString());
  return employeePayrollData;
};

/**
 * gets the values of all the selected elements
 */
const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach((item) => {
    if (item.checked) selItems.push(item.value);
  });
  return selItems;
};

/**
 * querySelector is the newer feature.
 * It is used when selecting by element name,nesting or class-name.
 * It will let you find elements with rules that can't be expressedwith getElementById.
 */
const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
};

/**
 * getElementById is better supported than qurySelector method in older versions of the browsers.
 * It will allow to select element by only it's id.
 */
const getInputElementValue = (id) => {
  let value = document.getElementById(id).value;
  return value;
};

const resetForm = () => {
  setValue("#name", "");
  unsetSelectedValues("[name=profile]");
  unsetSelectedValues("[name=gender]");
  unsetSelectedValues("[name=department]");
  setValue("#salary", "");
  setValue("#notes", "");
  setValue("#day", "1");
  setValue("#month", "Jan");
  setValue("#year", "2016");
  setTextValue("#salary-output", "400000"); //not working!
};

const unsetSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach((item) => {
    item.checked = false;
  });
};

const setTextValues = (id, value) => {
  //not used anywhere!
  const element = document.querySelector(id);
  element.textContenet = value;
};

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContenet = value;
};

//******************************************************* */
/**
 * Other file content
 */
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
  /*constructor*/ EmployeePayrollData(...params) {
    this.id = params[0];
    this.name = params[1];
    this.profilePic = params[2];
    this.gender = params[3];
    this.department = params[4];
    this.salary = params[5];
    this.startDate = params[6];
    this.note = params[7];
  }

  get id() {
    return this._id;
  }

  /**
   * @param {any} id
   */
  set id(id) {
    this._id = id;
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

  /**
   * @param {any} department
   */
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
