import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('the artist {string}', (artist) => {
    cy.wrap(artist).as("artist");
});

And('the song {string}', (song) => {
    cy.wrap(song).as("song");
});

Then('the lyrics must contain that part: {string}', (part) => {
    cy.get("@artist").then((artist) => {
        cy.get("@song").then((song) => {
            cy.getLyric(artist, song).then((res) => {
                expect(res.body).to.include(
                    part
                );
    })
    })
})
});


