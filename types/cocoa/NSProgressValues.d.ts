/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressValues<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    overallFraction<R = unknown>(): R;
    setTotalUnitCount<R = void, P0 = number>(_setTotalUnitCount: P0): R;
    totalUnitCount<R = number>(): R;
    setCompletedUnitCount<R = void, P0 = number>(_setCompletedUnitCount: P0): R;
    completedUnitCount<R = number>(): R;
    setFractionCompleted<R = void, P0 = number>(_setFractionCompleted: P0): R;
    fractionCompleted<R = number>(): R;
    setFinished<R = void, P0 = boolean>(_setFinished: P0): R;
    isFinished<R = boolean>(): R;
    setIndeterminate<R = void, P0 = boolean>(_setIndeterminate: P0): R;
    isIndeterminate<R = boolean>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    _indentedDescription<R = unknown, P0 = number>(__indentedDescription: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
  }
  namespace NSProgressValues {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSProgressValues>(): R;
      new: <R = NSProgressValues>() => R;
      decodableClasses<R = unknown>(): R;
      _importantKeys<R = unknown>(): R;
    }
  }
}

declare const NSProgressValues: cocoa.NSProgressValues.CLASS;
