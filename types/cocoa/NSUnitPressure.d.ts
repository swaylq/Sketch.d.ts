/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitPressure<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitPressure {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitPressure>(): R;
      new: <R = NSUnitPressure>() => R;
      poundsForcePerSquareInch<R = unknown>(): R;
      millimetersOfMercury<R = unknown>(): R;
      millibars<R = unknown>(): R;
      bars<R = unknown>(): R;
      inchesOfMercury<R = unknown>(): R;
      hectopascals<R = unknown>(): R;
      kilopascals<R = unknown>(): R;
      megapascals<R = unknown>(): R;
      gigapascals<R = unknown>(): R;
      newtonsPerMetersSquared<R = unknown>(): R;
    }
  }
}

declare const NSUnitPressure: cocoa.NSUnitPressure.CLASS;
