export const FeatureOff = "off";
export const FeatureOn = "on";
export const CoolOpenings = FeatureOff;

export const isCoolOpeningFeatureOn = (coolOpeningFeatureToggle) => {
    return coolOpeningFeatureToggle === FeatureOn;
};
