/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitArea<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {}
  namespace NSUnitArea {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDimension, NSSecureCodingProtocol {
      alloc<R = NSUnitArea>(): R;
      new: <R = NSUnitArea>() => R;
      hectares<R = unknown>(): R;
      ares<R = unknown>(): R;
      acres<R = unknown>(): R;
      squareMiles<R = unknown>(): R;
      squareYards<R = unknown>(): R;
      squareFeet<R = unknown>(): R;
      squareInches<R = unknown>(): R;
      squareNanometers<R = unknown>(): R;
      squareMicrometers<R = unknown>(): R;
      squareMillimeters<R = unknown>(): R;
      squareCentimeters<R = unknown>(): R;
      squareMeters<R = unknown>(): R;
      squareKilometers<R = unknown>(): R;
      squareMegameters<R = unknown>(): R;
    }
  }
}

declare const NSUnitArea: cocoa.NSUnitArea.CLASS;
