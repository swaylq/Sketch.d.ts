/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFloatRange<T0 = void, T1 = void, T2 = void> extends NSObject {
    CA_distanceToValue<R = number, P0 = unknown>(_CA_distanceToValue: P0): R;
    CA_interpolateValue_byFraction<R = unknown, P0 = unknown, P1 = number>(_CA_interpolateValue: P0, _byFraction: P1): R;
    CA_addValue_multipliedBy<R = unknown, P0 = unknown, P1 = number>(_CA_addValue: P0, _multipliedBy: P1): R;
    initWithLocation_length<R = unknown, P0 = number, P1 = number>(_initWithLocation: P0, _length: P1): R;
    length<R = number>(): R;
    location<R = number>(): R;
  }
  namespace NSFloatRange {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFloatRange>(): R;
      new: <R = NSFloatRange>() => R;
      rangeWithLocation_length<R = unknown, P0 = number, P1 = number>(_rangeWithLocation: P0, _length: P1): R;
    }
  }
}

declare const NSFloatRange: cocoa.NSFloatRange.CLASS;
