/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColor<T0 = void, T1 = void, T2 = void> extends _MSColor, MSAssetProtocol, MSColorProtocol {
    colorWithAlphaComponent<R = unknown, P0 = number>(_colorWithAlphaComponent: P0): R;
    fuzzyIsEqualExcludingAlpha_precision<R = boolean, P0 = unknown, P1 = number>(_fuzzyIsEqualExcludingAlpha: P0, _precision: P1): R;
    fuzzyIsEqualExcludingAlpha<R = boolean, P0 = unknown>(_fuzzyIsEqualExcludingAlpha: P0): R;
    fuzzyIsEqual_precision<R = boolean, P0 = unknown, P1 = number>(_fuzzyIsEqual: P0, _precision: P1): R;
    fuzzyIsEqual<R = boolean, P0 = unknown>(_fuzzyIsEqual: P0): R;
    HSBColor<R = unknown>(): R;
    NSColorWithColorSpace<R = unknown, P0 = unknown>(_NSColorWithColorSpace: P0): R;
    initWithImmutableObject<R = unknown, P0 = unknown>(_initWithImmutableObject: P0): R;
    initWithRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_initWithRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
    scaledColor<R = unknown, P0 = number>(_scaledColor: P0): R;
    RGBADictionary<R = unknown>(): R;
    brightness<R = number>(): R;
    saturation<R = number>(): R;
    hue<R = number>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    alpha<R = number>(): R;
    blue<R = number>(): R;
    debugDescription<R = NSString>(): R;
    green<R = number>(): R;
    red<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSColor, MSAssetProtocol, MSColorProtocol {
      alloc<R = MSColor>(): R;
      new: <R = MSColor>() => R;
      rgbColorRed_green_blue<R = unknown, P0 = number, P1 = number, P2 = number>(_rgbColorRed: P0, _green: P1, _blue: P2): R;
      colorWithNSColor<R = unknown, P0 = unknown>(_colorWithNSColor: P0): R;
      colorWithHue_saturation_brightness_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithHue: P0, _saturation: P1, _brightness: P2, _alpha: P3): R;
      blackColor<R = unknown>(): R;
      whiteColor<R = unknown>(): R;
      colorWithRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
      colorWithRGBADictionary<R = unknown, P0 = unknown>(_colorWithRGBADictionary: P0): R;
    }
  }
}

declare const MSColor: cocoa.MSColor.CLASS;
