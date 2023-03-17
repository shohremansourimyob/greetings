export const FeatureOff = "off";
export const FeatureOn = "on";
export const CoolOpenings = FeatureOff;

export const coolOpeningFeatureIsOn = (coolOpeningFeatureToggle) => {
    return coolOpeningFeatureToggle === FeatureOn;
};
