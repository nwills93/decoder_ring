const {expect} = require("chai")
const {caesar} = require("../src/caesar")

// Write your tests here!
describe("#caesar()", () => {
    describe("error handling", () => {
        it("should return false if the shift amount is equal to 0.", () => {
            const input = "flower power"
            const shift = 0
            const actual = caesar(input, shift)
            expect(actual).to.be.false
        })
        it("should return false if the shift amount is less than -25.", () => {
            const input = "flower power"
            const shift = -26
            const actual = caesar(input, shift)
            expect(actual).to.be.false
        })
        it("should return false if the shift amount is greater than 25.", () => {
            const input = "flower power"
            const shift = 26
            const actual = caesar(input, shift)
            expect(actual).to.be.false
        })
    })
    describe("encoding a message", () => {
        it("should encode a message by shifting the letters.", () => {
            const input = "flower"
            const shift = 3
            const actual = caesar(input, shift)
            const expected = "iorzhu"
            expect(actual).to.equal(expected)
        })
        it("should ignore capital letters.", () => {
            const input = "FloWer"
            const shift = 3
            const actual = caesar(input, shift)
            const expected = "iorzhu"
            expect(actual).to.equal(expected)
        })
        it("should leave spaces and other characters as is.", () => {
            const input = "Flo Wer!@#"
            const shift = 3
            const actual = caesar(input, shift)
            const expected = "ior zhu!@#"
            expect(actual).to.equal(expected)
        })
        it("should handle shifts that extend past the end of the alphabet.", () => {
            const input = "zebra cake"
            const shift = 3
            const actual = caesar(input, shift)
            const expected = "cheud fdnh"
            expect(actual).to.equal(expected)
        })
    })
    describe("decoding a message", () => {
        it("should decode a message by shifting the letters in the opposite direction.", () => {
            const input = "iorzhu"
            const shift = 3
            const encode = false
            const actual = caesar(input, shift, encode)
            const expected = "flower"
            expect(actual).to.equal(expected)
        })
        it("should ignore capital letters.", () => {
            const input = "ioRZhu"
            const shift = 3
            const encode = false
            const actual = caesar(input, shift, encode)
            const expected = "flower"
            expect(actual).to.equal(expected)
        })
        it("should leave spaces and other character as is.", () => {
            const input = "ioR Zhu!@#"
            const shift = 3
            const encode = false
            const actual = caesar(input, shift, encode)
            const expected = "flo wer!@#"
            expect(actual).to.equal(expected)
        })
        it("should handel shifts that extend past either end of the alphabet.", () => {
            const input = "cheud fdnh"
            const shift = 3
            const encode = false
            const actual = caesar(input, shift, encode)
            const expected = "zebra cake"
            expect(actual).to.equal(expected)
        })
    })
})