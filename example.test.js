import sum from "./example.js";

test('la function sum retourne la somme des 2 arguments', () => {
    expect(sum(1, 2)).toBe(3)
})