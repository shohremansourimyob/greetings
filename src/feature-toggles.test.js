import { isCoolOpeningFeatureOn } from "./feature-toggles.js";

describe("Featture Toggle", () => {
    describe("isCoolOpeningFeatureOn", () => {
        it("if featureToggle is on, it returns true", () => {
            const result = isCoolOpeningFeatureOn("on");

            expect(result).toBe(true);
        });

        it("if featureToggle value is not set, it returns true", () => {
            const result = isCoolOpeningFeatureOn("off");

            expect(result).toBe(false);
        });

        it("if featureToggle value is not set, it returns false", () => {
            const result = isCoolOpeningFeatureOn();

            expect(result).toBe(false);
        });

        it("if featureToggle value is invalid, it returns false", () => {
            const result = isCoolOpeningFeatureOn("something wrong");

            expect(result).toBe(false);
        });

    });
});