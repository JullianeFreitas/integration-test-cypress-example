///<reference types = "cypress"/>
const url = Cypress.config("baseUrl");

export async function getLyric(artist, song) {
    return cy.request({
        method: "GET",
        url: `${url}/v1/${artist}/${song}`,
        failOnStatusCode: false,
    })
}