/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRangeSpecifier<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
    initWithContainerClassDescription_containerSpecifier_key_startSpecifier_endSpecifier<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithContainerClassDescription: P0, _containerSpecifier: P1, _key: P2, _startSpecifier: P3, _endSpecifier: P4): R;
    endSpecifier<R = NSScriptObjectSpecifier>(): R;
    setEndSpecifier<R = void, P0 = NSScriptObjectSpecifier>(_v: P0): R;
    startSpecifier<R = NSScriptObjectSpecifier>(): R;
    setStartSpecifier<R = void, P0 = NSScriptObjectSpecifier>(_v: P0): R;
  }
  namespace NSRangeSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
      alloc<R = NSRangeSpecifier>(): R;
      new: <R = NSRangeSpecifier>() => R;
    }
  }
}

declare const NSRangeSpecifier: cocoa.NSRangeSpecifier.CLASS;
