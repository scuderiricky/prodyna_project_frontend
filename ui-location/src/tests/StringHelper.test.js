import { removeWhiteSpace } from "../utils/StringHelper.js";

test('checks whether the string has no empty whitespace between chars', () => {
    expect(removeWhiteSpace("a aa")).toBe("aaa");
    expect(removeWhiteSpace("a  a a a   ")).toBe("aaaa");
});

test('checks whether the string with  whitespaces at the beginning are removed', () => {
    expect(removeWhiteSpace("    aaaaa")).toBe("aaaaa");
    expect(removeWhiteSpace(" aaa")).toBe("aaa");
});

test('checks whether the string with  whitespaces at the end are removed', () => {
    expect(removeWhiteSpace("aaaaa   ")).toBe("aaaaa");
    expect(removeWhiteSpace("aaa ")).toBe("aaa");
});

test('checks whether the string with only whitespaces is an empty string at the end', () => {
    expect(removeWhiteSpace("      ")).toBe("");
    expect(removeWhiteSpace(" ")).toBe("");
});

test('checks whether the string with a null value will be a null value afterwards', () => {
    expect(removeWhiteSpace(null)).toBe(null);
    expect(removeWhiteSpace(undefined)).toBe(undefined);
});
