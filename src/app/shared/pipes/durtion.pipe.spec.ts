import { DurationPipe } from "./duration.pipe";

describe('DurationPipe', () => {
    let pipe = new DurationPipe();

    it('transforms 120 to 2h 0min', () => {
        expect(pipe.transform(120)).toBe("2h 0min");
    });

    it('transforms 0 to 0 min', () => {
        expect(pipe.transform(0)).toBe("0 min");
    });

    it('transforms 136 to 2h 16min', () => {
        expect(pipe.transform(136)).toBe("2h 16min");
    });

    it('transforms 16 to 16min', () => {
        expect(pipe.transform(16)).toBe("16min");
    });
});