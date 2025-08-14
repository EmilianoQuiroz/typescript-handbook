import { IEpisodic } from "../Interfaces/IEpisodic.js";
import { IVideo } from "../Interfaces/IVideo.js";
import { Director } from "../Models/Director.js";
export declare class Series implements IVideo<string>, IEpisodic {
    title: string;
    private duration;
    director: Director<string>;
    episodes: number;
    constructor(title: string, duration: number, director: Director<string>, episodes: number);
    getDuration(): number;
    play(): void;
}
//# sourceMappingURL=Series.d.ts.map