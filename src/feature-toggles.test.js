import { coolOpeningFeatureIsOn } from "./feature-toggles.js";

describe("Feature Toggle", () => {
    describe("coolOpeningFeatureIsOn", () => {
        it("if featureToggle is on, it returns true", () => {
            const result = coolOpeningFeatureIsOn("on");

            expect(result).toBe(true);
        });

        it("if featureToggle value is not set, it returns true", () => {
            const result = coolOpeningFeatureIsOn("off");

            expect(result).toBe(false);
        });

        it("if featureToggle value is not set, it returns false", () => {
            const result = coolOpeningFeatureIsOn();

            expect(result).toBe(false);
        });

        it("if featureToggle value is invalid, it returns false", () => {
            const result = coolOpeningFeatureIsOn("something wrong");

            expect(result).toBe(false);
        });

    });
});