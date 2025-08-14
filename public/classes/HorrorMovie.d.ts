import { Director } from "../Models/Director.js";
import { Movie } from "./Movie.js";
export declare class HorrorMovie extends Movie {
    hasJumpScares: boolean;
    constructor(title: string, duration: number, hasOscars: boolean, director: Director<string>, hasJumpScares: boolean);
    displayAlert(): void;
    getInfo(): string;
}
//# sourceMappingURL=HorrorMovie.d.ts.map