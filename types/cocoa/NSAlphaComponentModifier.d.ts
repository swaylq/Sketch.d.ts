/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlphaComponentModifier<T0 = void, T1 = void, T2 = void> extends NSObject, NSDynamicColorModifierProtocol {
    initWithAlphaComponent<R = unknown, P0 = number>(_initWithAlphaComponent: P0): R;
    alphaComponent<R = number>(): R;
    setAlphaComponent<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSAlphaComponentModifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDynamicColorModifierProtocol {
      alloc<R = NSAlphaComponentModifier>(): R;
      new: <R = NSAlphaComponentModifier>() => R;
    }
  }
}

declare const NSAlphaComponentModifier: cocoa.NSAlphaComponentModifier.CLASS;
