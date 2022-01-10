// Write your tests here!
const { expect } = require("chai")
const { substitution } = require("../src/substitution")

describe("#substitution() tests written by Nathaniel", () => {
    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing.", () => {
            const input = "message"
            const actual = substitution(input)
            expect(actual).to.be.false
        })
        it("should return false if the substitution alphabet is not exactly 26 characters.", () => {
            const input = "message"
            const alphabet = "tooshort"
            const actual = substitution(input, alphabet)
            expect(actual).to.be.false
        })
        it("should return false if the substitution alphabet does not conatain unique characters.", () => {
            const input = "message"
            const alphabet = "aaaaaaaaaaaaaaaaaaaaaaaaaa"
            const actual = substitution(input, alphabet)
            expect(actual).to.be.false
        })
    })
    describe("encoding a message", () => {
        it("should encode a message by using the given substitution alphabet.", () => {
            const message = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet);
            const expected = "ykrrpik";
            expect(actual).to.equal(expected)
        })
        it("should work with any kind of key with unique characters.", () => {
            const message = "message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet);
            const expected = "ysii.rs";
            expect(actual).to.equal(expected)
        })
        it("should preserve spaces.", () => {
            const message = "my message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet);
            const expected = "yp ysii.rs";
            expect(actual).to.equal(expected)
        })
    })
    describe("decoding a message", () => {
        it("should decode a message by using the given substitution alphabet.", () => {
            const message = "ykrrpik";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const encode = false
            const actual = substitution(message, alphabet, encode);
            const expected = "message";
            expect(actual).to.equal(expected)
        })
        it("should work with any kind of key with unique characters.", () => {
            const message = "ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const encode = false
            const actual = substitution(message, alphabet, encode);
            const expected = "message";
            expect(actual).to.equal(expected)
        })
        it("should preserve spaces.", () => {
            const message = "yp ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const encode = false
            const actual = substitution(message, alphabet, encode);
            const expected = "my message";
            expect(actual).to.equal(expected)
        })
        it("ignores capital letters.", () => {
            const message = "YP ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const encode = false
            const actual = substitution(message, alphabet, encode);
            const expected = "my message";
            expect(actual).to.equal(expected)
        })
    })
})