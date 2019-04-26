/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUniqueIDSpecifier<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
    initWithContainerClassDescription_containerSpecifier_key_uniqueID<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithContainerClassDescription: P0, _containerSpecifier: P1, _key: P2, _uniqueID: P3): R;
    uniqueID<R = unknown>(): R;
    setUniqueID<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSUniqueIDSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
      alloc<R = NSUniqueIDSpecifier>(): R;
      new: <R = NSUniqueIDSpecifier>() => R;
    }
  }
}

declare const NSUniqueIDSpecifier: cocoa.NSUniqueIDSpecifier.CLASS;
