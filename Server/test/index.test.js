const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1')
            expect(response.body).toHaveProperty('id')
            expect(response.body).toHaveProperty('name')
            expect(response.body).toHaveProperty('species')
            expect(response.body).toHaveProperty('gender')
            expect(response.body).toHaveProperty('status')
            expect(response.body).toHaveProperty('origin')
            expect(response.body).toHaveProperty('image')
        })
        it("Si hay un error responde con status: 500", async () => {
            await agent.get('/rickandmorty/character/asdfasdsadasd').expect(500);
        })
    })

    describe("GET /rickandmorty/login", () => {
        it("Debería dar acceso al tener el email y password correctos", async () => {
            const response = await agent.get('/rickandmorty/login/?email=el@Santi.com&password=hola123')
            expect(response.body).toEqual({ access: true })
        })
        it("Debería no dar acceso al tener el email y password incorrectos", async () => {
            const response = await agent.get('/rickandmorty/login/?email=nadaquever@gmail.com&password=sadsdasdasdasd')
            expect(response.body).toEqual({ access: false })
        })
    })


    describe("POST /rickandmorty/fav", () => {
        it("Debe devolver lo enviado por body en un arreglo", async () => {
            const response = await agent.post('/rickandmorty/fav', {
                id: 1,
                name: "Pepe",
                status: "Vivo",
                species: "Humano",
                gender: "Masculino",
                origin: "Tierra",
                image: "www.imagendepepe.com",
            })
            expect(Array.isArray(response.body)).toEqual(true)
            expect(response.body.length).toEqual(1)
        })
        it("Debe un arreglo con lo enviado por body mas lo anterior", async () => {
            const response = await agent.post('/rickandmorty/fav', {
                id: 2,
                name: "Pupu",
                status: "Muerto",
                species: "Rata",
                gender: "N/N",
                origin: "Omicron",
                image: "www.imagendepupu.com",
            })
            expect(Array.isArray(response.body)).toEqual(true)
            expect(response.body.length).toEqual(2)
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Debe devolver un array sin modificar si recibe un id que no esté en el mismo", async () => {
            const response = await agent.delete('/rickandmorty/fav/98789789789')
            expect(response.body.length).toEqual(2)
        })
        it("Debe eliminar el elemento del array que corresponda al id ingresado", async () => {
            const response = await agent.delete('/rickandmorty/fav/2')
            expect(response.body.length).toEqual(1)
        })
    })
})