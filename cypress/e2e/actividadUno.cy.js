/// <reference types="cypress" />
describe("Actividad complementaria (Happy Path)", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 1", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type(`pushingit${numero}`);
    cy.get("#pass").type("123456!");
    cy.get('[value = "Female"]').check({ force: true });
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
    //crear un test que permita registrarse en la pagina!
    //Recorda usar npx cypress open para abrir la interfaz de usuario
    //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female // recuerden el force true
  });
});

//Si tenes ganas de seguir practicando te propongo que con lo aprendido en clase te registres al sistema con los siguientes datos
// usuario: 'pushingit'
// contraseña '123456!'
//Para ir al login tienen que hacer doble click en el elemento 'incia sesion'

describe("Crear usuario pushingit", () => {
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type("pushingit");
    cy.get("#pass").type("123456!");
    cy.get('[value = "Female"]').check({ force: true });
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
  });

  describe("Inicio de sesión", () => {
    it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
      cy.visit("https://pushing-front.vercel.app/");
      cy.get("#registertoggle").dblclick();
      cy.get("#user").type("pushingit");
      cy.get("#pass").type("123456!");
      cy.get("#submitForm").click();
    });
  });
});

describe("Usuario con signo especial", () => {
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type("pushingit!");
    cy.get("#pass").type("123456!");
    cy.get('[value = "Female"]').check({ force: true });
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
  });
});

describe("Contraseña sin número", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type(`pushingit${numero}`);
    cy.get("#pass").type("carolina!");
    cy.get('[value = "Female"]').check({ force: true });
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
  });
});

describe("Contraseña sin signo especial", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type(`pushingit${numero}`);
    cy.get("#pass").type("12345678");
    cy.get('[value = "Female"]').check({ force: true });
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
  });
});

describe("Contraseña sin número y sin signo especial", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type(`pushingit${numero}`);
    cy.get("#pass").type("carolina");
    cy.get('[value = "Female"]').check({ force: true });
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
  });
});

describe("Contraseña corta", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type(`pushingit${numero}`);
    cy.get("#pass").type("caro12!");
    cy.get('[value = "Female"]').check({ force: true });
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
  });
});

describe("Género sin selección", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type(`pushingit${numero}`);
    cy.get("#pass").type("123456!");
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
  });
});

describe("Combinación de fecha de nacimiento incorrecta", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type(`pushingit${numero}`);
    cy.get("#pass").type("123456!");
    cy.get('[value = "Female"]').check({ force: true });
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
  });
});

describe("Campos de usuario y contraseña vacíos", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get('[value = "Female"]').check({ force: true });
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
  });
});

describe("Usuario y contraseña iguales", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Actividad https://codeshare.i https://pushing-front.vercel.appo/MND8bq complementeria 2", () => {
    cy.visit("https://pushing-front.vercel.app/");
    cy.get("#user").type("123456!");
    cy.get("#pass").type("123456!");
    cy.get('[value = "Female"]').check({ force: true });
    cy.get("#day").select("20"); //valor real
    cy.get("#month").select("3"); //posición array
    cy.get("#year").select("1992"); // texto visible
    cy.get("#submitForm").click();
  });
});
