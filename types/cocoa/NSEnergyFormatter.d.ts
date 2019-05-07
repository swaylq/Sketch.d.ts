/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEnergyFormatter<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol {
    stringFromJoules<R = unknown, P0 = number>(_stringFromJoules: P0): R;
    stringFromValue_unit<R = unknown, P0 = number, P1 = number>(_stringFromValue: P0, _unit: P1): R;
    unitStringFromJoules_usedUnit<R = unknown, P0 = number, P1 = number>(_unitStringFromJoules: P0, _usedUnit: P1): R;
    unitStringFromValue_unit<R = unknown, P0 = number, P1 = number>(_unitStringFromValue: P0, _unit: P1): R;
    dealloc<R = void>(): R;
    targetUnitFromJoules<R = number, P0 = number>(_targetUnitFromJoules: P0): R;
    forFoodEnergyUse<R = boolean>(): R;
    setForFoodEnergyUse<R = void, P0 = boolean>(_v: P0): R;
    unitStyle<R = number>(): R;
    setUnitStyle<R = void, P0 = number>(_v: P0): R;
    numberFormatter<R = NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSEnergyFormatter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFormatter, NSObservableProtocol, NSObserverProtocol {
      alloc<R = NSEnergyFormatter>(): R;
      new: <R = NSEnergyFormatter>() => R;
    }
  }
}

declare const NSEnergyFormatter: cocoa.NSEnergyFormatter.CLASS;
