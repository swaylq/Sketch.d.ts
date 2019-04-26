/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnitConverter<T0 = void, T1 = void, T2 = void> extends NSObject {
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    valueFromBaseUnitValue<R = number, P0 = number>(_valueFromBaseUnitValue: P0): R;
    baseUnitValueFromValue<R = number, P0 = number>(_baseUnitValueFromValue: P0): R;
  }
  namespace NSUnitConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUnitConverter>(): R;
      new: <R = NSUnitConverter>() => R;
    }
  }
}

declare const NSUnitConverter: cocoa.NSUnitConverter.CLASS;
