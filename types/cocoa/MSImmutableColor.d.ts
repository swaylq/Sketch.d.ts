/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableColor<T0 = void, T1 = void, T2 = void> extends _MSImmutableColor, MSColorProtocol {
    colorWithAlphaComponent<R = unknown, P0 = number>(_colorWithAlphaComponent: P0): R;
    stringValueWithAlpha_alphaMultiplication<R = unknown, P0 = boolean, P1 = number>(_stringValueWithAlpha: P0, _alphaMultiplication: P1): R;
    stringValueWithAlpha<R = unknown, P0 = boolean>(_stringValueWithAlpha: P0): R;
    fuzzyIsEqualExcludingAlpha_precision<R = boolean, P0 = unknown, P1 = number>(_fuzzyIsEqualExcludingAlpha: P0, _precision: P1): R;
    fuzzyIsEqualExcludingAlpha<R = boolean, P0 = unknown>(_fuzzyIsEqualExcludingAlpha: P0): R;
    fuzzyIsEqual_precision<R = boolean, P0 = unknown, P1 = number>(_fuzzyIsEqual: P0, _precision: P1): R;
    fuzzyIsEqual<R = boolean, P0 = unknown>(_fuzzyIsEqual: P0): R;
    hexValue<R = unknown>(): R;
    isGrayscale<R = boolean>(): R;
    isBlack<R = boolean>(): R;
    isWhite<R = boolean>(): R;
    newCGColorWithColorSpace<R = CGColor, P0 = CGColorSpace>(_newCGColorWithColorSpace: P0): R;
    NSColorWithColorSpace<R = unknown, P0 = unknown>(_NSColorWithColorSpace: P0): R;
    initWithRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_initWithRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
    svgRepresentation<R = unknown>(): R;
    NSColorForContext<R = unknown, P0 = unknown>(_NSColorForContext: P0): R;
    debugDescription<R = NSString>(): R;
    opaque<R = boolean>(): R;
    hash<R = number>(): R;
    manifestComponents<R = NSArray>(): R;
    alpha<R = number>(): R;
    blue<R = number>(): R;
    description<R = NSString>(): R;
    green<R = number>(): R;
    red<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSImmutableColor(Rendering): 
    NSColorForContext<R = unknown, P0 = unknown>(_NSColorForContext: P0): R;
    // + MSImmutableColor(Manifest):
    manifestComponents<R = NSArray>(): R;
  }
  namespace MSImmutableColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableColor, MSColorProtocol {
      alloc<R = MSImmutableColor>(): R;
      new: <R = MSImmutableColor>() => R;
      hexValueForRed_green_blue<R = unknown, P0 = number, P1 = number, P2 = number>(_hexValueForRed: P0, _green: P1, _blue: P2): R;
      getRed_green_blue_fromHexValue<R = void, P0 = number, P1 = number, P2 = number, P3 = unknown>(_getRed: P0, _green: P1, _blue: P2, _fromHexValue: P3): R;
      availableRGBColorSpaces<R = unknown>(): R;
      colorWithNSColor<R = unknown, P0 = unknown>(_colorWithNSColor: P0): R;
      blackColor<R = unknown>(): R;
      whiteColor<R = unknown>(): R;
      colorWithWhite_alpha<R = unknown, P0 = number, P1 = number>(_colorWithWhite: P0, _alpha: P1): R;
      colorWithIntegerRed_green_blue<R = unknown, P0 = number, P1 = number, P2 = number>(_colorWithIntegerRed: P0, _green: P1, _blue: P2): R;
      colorWithIntegerRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithIntegerRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
      colorWithRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
      colorWithSVGString<R = unknown, P0 = unknown>(_colorWithSVGString: P0): R;
      namedColor<R = unknown, P0 = unknown>(_namedColor: P0): R;
      staticColorDictionary<R = unknown>(): R;
  
  }
  }
}

declare const MSImmutableColor: cocoa.MSImmutableColor.CLASS;
