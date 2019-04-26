/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMeasurement<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    measurementBySubtractingMeasurement<R = unknown, P0 = unknown>(_measurementBySubtractingMeasurement: P0): R;
    measurementByAddingMeasurement<R = unknown, P0 = unknown>(_measurementByAddingMeasurement: P0): R;
    _performOperation_withMeasurement<R = unknown, P0 = number, P1 = unknown>(__performOperation: P0, _withMeasurement: P1): R;
    measurementByConvertingToUnit<R = unknown, P0 = unknown>(_measurementByConvertingToUnit: P0): R;
    canBeConvertedToUnit<R = boolean, P0 = unknown>(_canBeConvertedToUnit: P0): R;
    dealloc<R = void>(): R;
    initWithDoubleValue_unit<R = unknown, P0 = number, P1 = unknown>(_initWithDoubleValue: P0, _unit: P1): R;
    doubleValue<R = number>(): R;
    unit<R = NSUnit>(): R;
  }
  namespace NSMeasurement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSMeasurement>(): R;
      new: <R = NSMeasurement>() => R;
    }
  }
}

declare const NSMeasurement: cocoa.NSMeasurement.CLASS;
