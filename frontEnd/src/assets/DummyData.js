import { default as y1 } from "./y1.jpg"
import { default as y2 } from "./y2.jpg"
import { default as y5 } from "./y5.jpg"
import { default as y9 } from "./y9.jpg"
import { default as y11 } from "./y11.jpg"




export { default as slider1 } from "./slider1.png";
export { default as app } from "./app.jpg";

export { default as work } from "./work.png";
export { default as agency } from "./agency.png";
export { default as magnifiying } from "./magnifiying-glass.png";

export { default as test } from "./web-programming.png";

// candidate@gmail.com
// employer@gmail.com

// P@ssw0rd

export const featuredJobs =
  [
    {
      "_id": 1,
      "title": "Junior Graphic Designer (Web)",
      "img": y1,
      "category": "Design",
      "category2": "Development",

      "location": "NewYork",
      "minSalary": "150",
      "maxSalary": "180",
      "salaryType": "week",
      "type": "Full time",
      "isFeatured": "yes",
      "isFilled": "yes",
      "isUrgent": "yes"
    },
    {
      "_id": 2,

      "title": "Finance Manager & Health",
      "img": y11,
      "category": "Design",
      "location": "NewYork",
      "minSalary": "450",
      "maxSalary": "500",
      "salaryType": "month",
      "type": "Full time",
      "isFeatured": "yes",
      "isFilled": "no",
      "isUrgent": "yes"
    },
    {
      "_id": 3,

      "title": "General Ledger Accountant",
      "img": y9,
      "category": "Design",
      "category2": "Marketing",

      "location": "NewYork",
      "minSalary": "50",
      "maxSalary": "68",
      "salaryType": "day",
      "type": "Full time",
      "isFeatured": "yes",
      "isFilled": "no",
      "isUrgent": "no"
    },
    {
      "_id": 4,

      "title": "Assistant / Store Keeper",
      "img": y1,
      "category": "automotiveJob",
      "category": "Marketing",

      "location": "NewYork",
      "minSalary": "250",
      "maxSalary": "280",
      "salaryType": "week",
      "type": "Part time",
      "isFeatured": "yes",
      "isFilled": "no",
      "isUrgent": "no"
    },
    {
      "_id": 5,

      "title": "Group Marketing Manager",
      "img": y5,
      "category": "CustomerService",
      "category": "Marketing",

      "location": "Miami",
      "minSalary": "800",
      "maxSalary": "850",
      "salaryType": "month",
      "type": "Part time",
      "isFeatured": "no",
      "isFilled": "no",
      "isUrgent": "no"
    },
    {
      "_id": 6,
      "title": "Product Sales Specialist",
      "img": y5,
      "category": "projectManagement",
      "location": "NewYork",
      "minSalary": "520",
      "maxSalary": "650",
      "salaryType": "month",
      "type": "Internship",
      "isFeatured": "yes",
      "isFilled": "no",
      "isUrgent": "no"
    },
    {

      "_id": 7,
      "title": "Senior Graphic Designer (Web)",
      "img": y2,
      "category": "Design",
      "category": "Development",

      "location": "NewYork",
      "minSalary": "350",
      "maxSalary": "380",
      "salaryType": "week",
      "type": "Full time",
      "isFeatured": "yes",
      "isFilled": "yes",
      "isUrgent": "yes"
    },
    {
      "_id": 8,

      "title": "Finance Manager",
      "img": y11,
      "category": "Design",
      "location": "NewYork",
      "minSalary": "350",
      "maxSalary": "400",
      "salaryType": "month",
      "type": "Full time",
      "isFeatured": "yes",
      "isFilled": "no",
      "isUrgent": "yes"
    },
    {

      "_id": 9,
      "title": "Ledger Accountant",
      "img": y9,
      "category": "Design",
      "category": "Marketing",

      "location": "NewYork",
      "minSalary": "40",
      "maxSalary": "58",
      "salaryType": "day",
      "type": "Full time",
      "isFeatured": "yes",
      "isFilled": "no",
      "isUrgent": "no"
    },
    {
      "_id": 10,
      "title": "Store Keeper",
      "img": y1,
      "category": "Marketing",
      "category": "automotiveJob",

      "location": "NewYork",
      "minSalary": "150",
      "maxSalary": "180",
      "salaryType": "week",
      "type": "Part time",
      "isFeatured": "yes",
      "isFilled": "no",
      "isUrgent": "no"
    },
    {

      "_id": 11,
      "title": "Marketing Manager",
      "img": y5,
      "category": "CustomerService",
      "category": "Marketing",

      "location": "Miami",
      "minSalary": "900",
      "maxSalary": "950",
      "salaryType": "month",
      "type": "Part time",
      "isFeatured": "no",
      "isFilled": "no",
      "isUrgent": "no"
    },
    {

      "_id": 12,
      "title": "Sales Specialist",
      "img": y5,
      "category": "projectManagement",
      "location": "NewYork",
      "minSalary": "550",
      "maxSalary": "620",
      "salaryType": "month",
      "type": "Internship",
      "isFeatured": "yes",
      "isFilled": "no",
      "isUrgent": "no"
    }
  ]

export const jobTypes = ["Full time", "Part time", "Internship"];
export const jobCategories = ["Design", "Development", "Marketing", "automotiveJob", "CustomerService", "projectManagement"];
export const jobCategories2 = [
  { text: "Accounting / Finance", value: "Accounting" },
  { text: "Design", value: "Design" },
  { text: "Development", value: "Development" },
  { text: "Marketing", value: "Marketing" },
  { text: "Automotive Job", value: "Automotive" },
  { text: "Customer Service", value: "CustomerService" },
  { text: "Project Management", value: "ProjectManagement" }
];



export const jobCat = [
  {
    title: "Accounting",

    openPosition: 1,
  },
  {
    title: "Marketing",

    openPosition: 2,
  },
  {
    title: "Design",

    openPosition: 5,
  },

  {
    title: "Development",

    openPosition: 2,
  },

  {
    title: "HumanResource",

    openPosition: 0,
  },
  {
    title: "projectManagement",

    openPosition: 1,
  },


  {
    title: "CustomerService",

    openPosition: 4,
  },
  {
    title: "HealthAndCare",

    openPosition: 3,
  },

  {
    title: "automotiveJob",

    openPosition: 3,
  },


];

export const jobCatImage = [
  {
    title: "Accounting",
    img: "fa-coins",
  },
  {
    title: "Marketing",
    img: "fa-bullhorn",
  },
  {
    title: "Design",
    img: "fa-wand-magic-sparkles",
  },
  {
    title: "Development",
    img: "fa-file-code",
  },
  {
    title: "HumanResource",
    img: "fa-users",
  },
  {
    title: "projectManagement",
    img: "fa-rocket",
  },
  {
    title: "CustomerService",
    img: "fa-headset",
  },
  {
    title: "HealthAndCare",
    img: "fa-briefcase",
  },
  {
    title: "automotiveJob",
    img: "fa-car-rear",
  },
];


// lang translation 
export const languages = {
  en: 'English',
  ar: 'عربي',
};

const cityData = [
  { city: 'New York', postalCode: '10001' },
  { city: 'Los Angeles', postalCode: '90001' },
  { city: 'Chicago', postalCode: '60601' },
  { city: 'London', postalCode: 'SW1A 1AA' },
  { city: 'Paris', postalCode: '75000' },
  { city: 'Berlin', postalCode: '10178' },
  { city: 'Rome', postalCode: '00118' },
  { city: 'Madrid', postalCode: '28001' },
  { city: 'Tokyo', postalCode: '100-0001' },
  { city: 'Beijing', postalCode: '100000' },
  { city: 'Sydney', postalCode: '2000' },
  { city: 'Cairo', postalCode: '11511' },
  { city: 'Dubai', postalCode: '00000' },
  { city: 'Mumbai', postalCode: '400001' },
  { city: 'Bangkok', postalCode: '10100' },
  { city: 'Istanbul', postalCode: '34122' },
  { city: 'Moscow', postalCode: '101000' },
  { city: 'Rio de Janeiro', postalCode: '20000' },
  { city: 'Toronto', postalCode: 'M5H 2N2' },
  { city: 'Mexico City', postalCode: '06000' },
  { city: 'São Paulo', postalCode: '01310-100' },
  { city: 'Buenos Aires', postalCode: 'C1002' },
  { city: 'Johannesburg', postalCode: '2000' },
  { city: 'Cape Town', postalCode: '8000' },
  { city: 'Riyadh', postalCode: '11564' },
  { city: 'Doha', postalCode: '00000' },
  { city: 'Kuwait City', postalCode: '13001' },
  { city: 'Amman', postalCode: '11196' },
  { city: 'Beirut', postalCode: '00000' },
  { city: 'Baghdad', postalCode: '10001' },
];



export function cityCombiner() {
  const data = cityData.map((item) => {
    return {
      value: item.city,
      text: `${item.city} | ${item.postalCode}`,
      city: item.city,
      postalCode: item.postalCode,
    };
  });
  return data;
}


export function customFiltering(e) {
  const query = e.text.toLowerCase();
  e.updateData(
    cityCombiner().filter(
      (item) =>
        item.city.toLowerCase().startsWith(query) ||
        item.postalCode.startsWith(query)
    )
  );
}

export const popularSearches = ['Designer', 'Developer', 'Web', 'IOS', 'PHP', 'Senior', 'Engineer'];

export const predefinedUsers = [
  {
    username: 'candidate',
    password: 'P@ssw0rd',
    email: 'candidate@gmail.com',
    fullName: 'Chaker Yaakoub',
    isEmployer: false,
  },
  {
    username: 'employer',
    password: 'P@ssw0rd',
    email: 'employer@gmail.com',
    fullName: 'Hussein Fakih',
    isEmployer: true,
  },
];



export const optionsRegisterEnglish = {
  rules: {
    emailReg: {
      required: [true, '* Please enter Your Email'],
      email: [true, '* Please enter a valid Email'],
    },
    passwordReg: {
      required: [true, '* Please enter your Password'],
      minLength: [5, '* Please enter at least 5 characters.'],
      regex: [/(?=.*[@])(?=.*[A-Z])/g, '* Please enter a password with at least one symbol (@) and one uppercase letter.'],
    },
    retryPassword: {
      required: [true, '* Please enter your Retry Password'],
      minLength: [5, '* Please enter at least 5 characters.'],
      equalTo: ['passwordReg', '* Confirm password do not match. Passwords must be the same!'],
    },
  },
};

export const optionsRegisterArabic = {
  rules: {
    emailReg: {
      required: [true, '* الرجاء إدخال البريد الإلكتروني الخاص بك'],
      email: [true, '* الرجاء إدخال بريد إلكتروني صالح'],
    },
    passwordReg: {
      required: [true, '* الرجاء إدخال كلمة المرور الخاصة بك'],
      minLength: [5, '* الرجاء إدخال 5 أحرف على الأقل'],
      regex: [/(?=.*[@])(?=.*[A-Z])/g, '* الرجاء إدخال كلمة مرور تحتوي على رمز (@) وحرف كبير واحد على الأقل.'],
    },
    retryPassword: {
      required: [true, '* الرجاء إدخال كلمة المرور الجديدة مرة أخرى'],
      minLength: [5, '* الرجاء إدخال 5 أحرف على الأقل'],

      equalTo: ['passwordReg', '* كلمة المرور وإعادة كلمة المرور غير متطابقتين.'],
    },
  },
};


export const optionsLoginEnglish = {
  rules: {
    email: {
      required: [true, '* Please enter Your Email'],
      email: [true, '* Please enter a valid Email'],
    },
    password: {
      required: [true, '* Please enter your Password'],
      minLength: [5, '* Please enter at least 5 characters.'],
      regex: [/(?=.*[@])(?=.*[A-Z])/g, '* Please enter a password with at least 1 symbol e.g: @ and 1 uppercase letter.'],

    },

  },
};

export const optionsLoginArabic = {
  rules: {
    email: {
      required: [true, '* الرجاء إدخال البريد الإلكتروني الخاص بك'],
      email: [true, '* الرجاء إدخال بريد إلكتروني صالح'],
    },
    password: {
      required: [true, '* الرجاء إدخال كلمة المرور الخاصة بك'],
      minLength: [5, '* الرجاء إدخال 5 أحرف على الأقل'],
      regex: [/(?=.*[@])(?=.*[A-Z])/g, '* الرجاء إدخال كلمة مرور تحتوي على رمز واحد على الأقل مثل: @ وحرف كبير واحد على الأقل.'],
    },
  },
};


export const currentYear = new Date().getFullYear();
export const jobsAddedTody = 293;

