import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('the artist {string}', (artist) => {
    cy.wrap(artist).as("artist");
});

And('the song {string}', (song) => {
    cy.wrap(song).as("song");
});

Then('the lyrics must contain that part: {string}', (song) => {
    cy.wrap(song).as("song");
});

Then(/^the lyrics must contain that part: '(.*)'$/, function (part) {
    cy.get("@artist").then((artist) => {
        cy.get("@song").then((song) => {
            cy.getLyric(artist, song).then((res) => {
                expect(res.body.lyrics).to.include(
                    part
                );
                expect(res.status).to.be.eq(200);

            })
        })
    })
});

Then(/^the lyrics must not be found$/, function () {
    cy.get("@artist").then((artist) => {
        cy.get("@song").then((song) => {
            cy.getLyric(artist, song).then((res) => {
                expect(res.body.error).to.include(
                    "No lyrics found"
                );
                expect(res.status).to.be.eq(404);

            })
        })
    })
});