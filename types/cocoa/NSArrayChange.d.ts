/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSArrayChange<T0 = void, T1 = void, T2 = void> extends NSObject {
    initWithType_sourceIndex_destinationIndex_value<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown>(_initWithType: P0, _sourceIndex: P1, _destinationIndex: P2, _value: P3): R;
    value<R = unknown>(): R;
    destinationIndex<R = number>(): R;
    sourceIndex<R = number>(): R;
    changeType<R = number>(): R;
  }
  namespace NSArrayChange {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSArrayChange>(): R;
      new: <R = NSArrayChange>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSArrayChange: cocoa.NSArrayChange.CLASS;
