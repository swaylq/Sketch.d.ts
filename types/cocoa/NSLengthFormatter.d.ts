/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLengthFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol {
    stringFromValue_unit<R = unknown, P0 = number, P1 = number>(_stringFromValue: P0, _unit: P1): R;
    stringFromMeters<R = unknown, P0 = number>(_stringFromMeters: P0): R;
    unitStringFromMeters_usedUnit<R = unknown, P0 = number, P1 = number>(_unitStringFromMeters: P0, _usedUnit: P1): R;
    unitStringFromValue_unit<R = unknown, P0 = number, P1 = number>(_unitStringFromValue: P0, _unit: P1): R;
    dealloc<R = void>(): R;
    targetUnitFromMeters<R = number, P0 = number>(_targetUnitFromMeters: P0): R;
    forPersonHeightUse<R = boolean>(): R;
    setForPersonHeightUse<R = void, P0 = boolean>(_v: P0): R;
    unitStyle<R = number>(): R;
    setUnitStyle<R = void, P0 = number>(_v: P0): R;
    numberFormatter<R = NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSLengthFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol {
      alloc<R = NSLengthFormatter>(): R;
      new: <R = NSLengthFormatter>() => R;
    }
  }
}

declare const NSLengthFormatter: cocoa.NSLengthFormatter.CLASS;
