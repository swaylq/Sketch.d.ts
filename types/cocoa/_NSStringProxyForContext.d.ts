/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStringProxyForContext<T0 = void, T1 = void, T2 = void> extends NSString {
    _dynamicContextEvaluation_patternString<R = unknown, P0 = unknown, P1 = unknown>(__dynamicContextEvaluation: P0, _patternString: P1): R;
    _retainFormatter<R = void, P0 = unknown>(__retainFormatter: P0): R;
    length<R = number>(): R;
    dealloc<R = void>(): R;
    item<R = unknown>(): R;
    setItem<R = void, P0 = unknown>(_v: P0): R;
    formatter<R = NSFormatter>(): R;
    setFormatter<R = void, P0 = NSFormatter>(_v: P0): R;
    string<R = NSString>(): R;
    setString<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace _NSStringProxyForContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = _NSStringProxyForContext>(): R;
      new: <R = _NSStringProxyForContext>() => R;
    }
  }
}
