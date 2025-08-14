import { IVideo } from "../Interfaces/IVideo.js";
import { Director } from "../Models/Director.js";
export declare class Movie implements IVideo<string> {
    title: string;
    private duration;
    readonly hasOscars: boolean;
    director: Director<string>;
    constructor(title: string, duration: number, hasOscars: boolean, director: Director<string>);
    getDuration(): number;
    getInfo(): string;
    play(): void;
}
//# sourceMappingURL=Movie.d.ts.map