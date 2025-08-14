export class Series {
    title;
    duration;
    director;
    episodes;
    constructor(title, duration, director, episodes) {
        this.title = title;
        this.duration = duration;
        this.director = director;
        this.episodes = episodes;
    }
    getDuration() {
        return this.duration;
    }
    play() {
        console.log("Playing a series");
    }
}
//# sourceMappingURL=Series.js.map