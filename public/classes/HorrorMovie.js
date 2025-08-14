import { Movie } from "./Movie.js";
export class HorrorMovie extends Movie {
    hasJumpScares;
    constructor(title, duration, hasOscars, director, hasJumpScares) {
        super(title, duration, hasOscars, director);
        this.hasJumpScares = hasJumpScares;
    }
    displayAlert() {
        console.log("This movie is really scary");
    }
    getInfo() {
        return "Some movie info";
    }
}
//# sourceMappingURL=HorrorMovie.js.map