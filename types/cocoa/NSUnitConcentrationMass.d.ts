/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitConcentrationMass<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitConcentrationMass {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitConcentrationMass>(): R;
      new: <R = NSUnitConcentrationMass>() => R;
      millimolesPerLiterWithGramsPerMole<R = unknown, P0 = number>(_millimolesPerLiterWithGramsPerMole: P0): R;
      milligramsPerDeciliter<R = unknown>(): R;
      gramsPerLiter<R = unknown>(): R;
    }
  }
}

declare const NSUnitConcentrationMass: cocoa.NSUnitConcentrationMass.CLASS;
