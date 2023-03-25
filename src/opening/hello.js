import * as FeatureToggles from "../feature-toggles.js";

const hello = () => {
    if (FeatureToggles.CoolOpenings == FeatureToggles.FeatureOn)
        return "Yo";
    return "Hi";
};

export default hello;
