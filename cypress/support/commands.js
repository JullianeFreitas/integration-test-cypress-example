import { getLyric } from "../integration/requests";

Cypress.Commands.add("getLyric", (artist, song) => {
    getLyric(artist, song).then(r => {
        return r
    })
})