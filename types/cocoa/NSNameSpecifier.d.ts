/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNameSpecifier<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
    initWithContainerClassDescription_containerSpecifier_key_name<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithContainerClassDescription: P0, _containerSpecifier: P1, _key: P2, _name: P3): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSNameSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
      alloc<R = NSNameSpecifier>(): R;
      new: <R = NSNameSpecifier>() => R;
    }
  }
}

declare const NSNameSpecifier: cocoa.NSNameSpecifier.CLASS;
