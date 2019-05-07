/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMagnifier<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowDelegateProtocol {
    trackMagnifierWithDelegate<R = void, P0 = unknown>(_trackMagnifierWithDelegate: P0): R;
    _createMagnifyingGlassWindow<R = void>(): R;
    magnifyingGlassContentViewClass<R = unknown>(): R;
    dealloc<R = void>(): R;
    continuous<R = boolean>(): R;
    setContinuous<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSMagnifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSWindowDelegateProtocol {
      alloc<R = _NSMagnifier>(): R;
      new: <R = _NSMagnifier>() => R;
      sharedMagnifier<R = unknown>(): R;
    }
  }
}
