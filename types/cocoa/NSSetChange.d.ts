/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSetChange<T0 = void, T1 = void, T2 = void> extends NSObject {
    initWithType_object<R = unknown, P0 = number, P1 = unknown>(_initWithType: P0, _object: P1): R;
    value<R = unknown>(): R;
    changeType<R = number>(): R;
  }
  namespace NSSetChange {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSetChange>(): R;
      new: <R = NSSetChange>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSSetChange: cocoa.NSSetChange.CLASS;
