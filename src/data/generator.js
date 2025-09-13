import { fakerRU as faker } from "@faker-js/faker"

const randomGender = () => faker.helpers.arrayElement(["male", "female"]);
const randomBloodType = () => faker.helpers.arrayElement(["A", "B", "AB", "O"]);
const randomMaritalStatus = () =>
  faker.helpers.arrayElement(["Холост/Не замужем", "Женат/Замужем", "Разведён(а)", "Вдовец/Вдова"]);
const randomEducationLevel = () =>
  faker.helpers.arrayElement(["Среднее", "Бакалавр", "Магистр", "Аспирантура"]);
const randomEmploymentStatus = () =>
  faker.helpers.arrayElement(["Работает", "Безработный", "Пенсионер", "Студент"]);
const randomDisability = () =>
  faker.helpers.arrayElement(["Нет", "I группа", "II группа", "III группа"]);
const randomCitizenship = () =>
  faker.helpers.arrayElement(["Россия", "Казахстан", "Беларусь"]);

export function generateCitizenShort(id) {
  const gender = randomGender();
  const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: "age" });

  return {
    id,
    name: faker.person.fullName({ sex: gender }),
    avatar: faker.image.avatar(),
    gender,
    birthDate: birthDate.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }),
    profession: faker.person.jobTitle(),
    region: faker.location.city(),
  };
}

export function generateCitizenFull(id) {
  const shortData = generateCitizenShort(id);

  return {
    ...shortData,

    general: {
      passport: faker.string.numeric(10),
      citizenship: randomCitizenship(),
      maritalStatus: randomMaritalStatus(),
      bloodType: randomBloodType(),
    },

    contacts: {
      phone: faker.phone.number("+7 (###) ###-##-##"),
      email: faker.internet.email(),
      website: faker.internet.url(),
      address: faker.location.streetAddress({ useFullAddress: true }),
      zipcode: faker.location.zipCode('######'),
      emergencyContact: {
        name: faker.person.fullName(),
        phone: faker.phone.number("+7 (###) ###-##-##"),
      },
      whatsapp: faker.phone.number("+7 (###) ###-##-##"),
      telegram: "@" + faker.internet.username().toLowerCase(),
    },

    family: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => ({
      name: faker.person.fullName(),
      relation: faker.helpers.arrayElement(["Супруг(а)", "Ребёнок", "Родитель", "Брат/Сестра"]),
      birthDate: faker.date.birthdate({ min: 1, max: 70, mode: "age" }).toISOString().split("T")[0],
    })),

    education: [
      {
        level: "Среднее",
        institution: `Школа №${faker.number.int({ min: 1, max: 200 })}`,
        graduationYear: faker.date.past({ years: 30 }).getFullYear(),
      },
      {
        level: randomEducationLevel(),
        institution: "Университет " + faker.company.name(),
        specialization: faker.person.jobArea(),
        graduationYear: faker.date.past({ years: 20 }).getFullYear(),
      },
      ...(faker.datatype.boolean()
        ? [
          {
            level: "Курсы",
            institution: "Курс " + faker.company.name(),
            specialization: faker.person.jobArea(),
            graduationYear: faker.date.past({ years: 10 }).getFullYear(),
          },
        ]
        : []),
    ],

    employment: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }).map(() => {
      const startDate = faker.date.past({ years: 20 });
      const endDate = faker.datatype.boolean()
        ? faker.date.between({ from: startDate, to: new Date() })
        : null;

      return {
        company: faker.company.name(),
        jobTitle: faker.person.jobTitle(),
        status: randomEmploymentStatus(),
        experienceYears: faker.number.int({ min: 0, max: 40 }),
        salary: faker.number.int({ min: 30000, max: 250000 }),
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate ? endDate.toISOString().split("T")[0] : null,
      };
    }),

    health: {
      insuranceNumber: faker.string.numeric(10),
      disability: randomDisability(),
      chronicDiseases: faker.helpers.arrayElements(
        ["Гипертония", "Астма", "Диабет", "Нет"],
        { min: 1, max: 2 }
      ),
      vaccinations: faker.helpers.arrayElements(
        ["COVID-19", "Грипп", "Гепатит А", "Гапатит В", "Лишай", "Столбняк"],
        { min: 0, max: 3 }
      ),
      allergies: faker.helpers.arrayElements(
        ["Пыльца", "Пыль", "Молоко", "Арахис", "Нет"],
        { min: 1, max: 2 }
      ),
    },

    documents: {
      passport: faker.string.numeric(10),
      driverLicense: faker.datatype.boolean() ? faker.string.numeric(8) : null,
      taxId: faker.string.numeric(12),
      militaryId: faker.datatype.boolean() ? faker.string.numeric(7) : null,
    },

    additional: {
      notes: faker.lorem.sentence(),
      hobbies: faker.helpers.arrayElements(
        ["Спорт", "Чтение", "Музыка", "Путешествия", "Рисование"],
        { min: 1, max: 3 }
      ),
      consents: {
        personalData: faker.datatype.boolean(),
        newsLetter: faker.datatype.boolean(),
        survey: faker.datatype.boolean(),
        mediaPublication: faker.datatype.boolean(),
      }
    },
  };
}


export function generateCitizensList(count = 100) {
  return Array.from({ length: count }, (_, i) => generateCitizenShort(i + 1));
}

export function generateCitizensFull(count = 100) {
  return Array.from({ length: count }, (_, i) => generateCitizenFull(i + 1));
}