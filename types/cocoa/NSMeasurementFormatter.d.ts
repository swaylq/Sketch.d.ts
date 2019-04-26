/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMeasurementFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSSecureCodingProtocol {
    stringFromUnit<R = unknown, P0 = unknown>(_stringFromUnit: P0): R;
    measurementFromString<R = unknown, P0 = unknown>(_measurementFromString: P0): R;
    stringFromMeasurement<R = unknown, P0 = unknown>(_stringFromMeasurement: P0): R;
    dealloc<R = void>(): R;
    numberFormatter<R = NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    locale<R = NSLocale>(): R;
    setLocale<R = void, P0 = NSLocale>(_v: P0): R;
    unitStyle<R = number>(): R;
    setUnitStyle<R = void, P0 = number>(_v: P0): R;
    unitOptions<R = number>(): R;
    setUnitOptions<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSMeasurementFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSSecureCodingProtocol {
      alloc<R = NSMeasurementFormatter>(): R;
      new: <R = NSMeasurementFormatter>() => R;
    }
  }
}

declare const NSMeasurementFormatter: cocoa.NSMeasurementFormatter.CLASS;
