/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMassFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol {
    stringFromValue_unit<R = unknown, P0 = number, P1 = number>(_stringFromValue: P0, _unit: P1): R;
    stringFromKilograms<R = unknown, P0 = number>(_stringFromKilograms: P0): R;
    unitStringFromValue_unit<R = unknown, P0 = number, P1 = number>(_unitStringFromValue: P0, _unit: P1): R;
    unitStringFromKilograms_usedUnit<R = unknown, P0 = number, P1 = number>(_unitStringFromKilograms: P0, _usedUnit: P1): R;
    dealloc<R = void>(): R;
    targetUnitFromKilograms<R = number, P0 = number>(_targetUnitFromKilograms: P0): R;
    forPersonMassUse<R = boolean>(): R;
    setForPersonMassUse<R = void, P0 = boolean>(_v: P0): R;
    unitStyle<R = number>(): R;
    setUnitStyle<R = void, P0 = number>(_v: P0): R;
    numberFormatter<R = NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSMassFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol {
      alloc<R = NSMassFormatter>(): R;
      new: <R = NSMassFormatter>() => R;
    }
  }
}

declare const NSMassFormatter: cocoa.NSMassFormatter.CLASS;
