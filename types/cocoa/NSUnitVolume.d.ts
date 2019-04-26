/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitVolume<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitVolume {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitVolume>(): R;
      new: <R = NSUnitVolume>() => R;
      metricCups<R = unknown>(): R;
      imperialGallons<R = unknown>(): R;
      imperialQuarts<R = unknown>(): R;
      imperialPints<R = unknown>(): R;
      imperialFluidOunces<R = unknown>(): R;
      imperialTablespoons<R = unknown>(): R;
      imperialTeaspoons<R = unknown>(): R;
      gallons<R = unknown>(): R;
      quarts<R = unknown>(): R;
      pints<R = unknown>(): R;
      cups<R = unknown>(): R;
      fluidOunces<R = unknown>(): R;
      tablespoons<R = unknown>(): R;
      teaspoons<R = unknown>(): R;
      bushels<R = unknown>(): R;
      acreFeet<R = unknown>(): R;
      cubicMiles<R = unknown>(): R;
      cubicYards<R = unknown>(): R;
      cubicFeet<R = unknown>(): R;
      cubicInches<R = unknown>(): R;
      cubicMillimeters<R = unknown>(): R;
      cubicCentimeters<R = unknown>(): R;
      cubicDecimeters<R = unknown>(): R;
      cubicMeters<R = unknown>(): R;
      cubicKilometers<R = unknown>(): R;
      milliliters<R = unknown>(): R;
      centiliters<R = unknown>(): R;
      deciliters<R = unknown>(): R;
      liters<R = unknown>(): R;
      kiloliters<R = unknown>(): R;
      megaliters<R = unknown>(): R;
    }
  }
}

declare const NSUnitVolume: cocoa.NSUnitVolume.CLASS;
