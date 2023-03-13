import * as FeatureToggles from "../feature-toggles.js";

const pleasantry = () => {
    if (FeatureToggles.CoolOpenings == FeatureToggles.FeatureOn)
        return "Sup?";
    return "How are you?";
};

export default pleasantry;