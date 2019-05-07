/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHighContrastForegroundColorModifier<T0 = void, T1 = void, T2 = void> extends NSObject, NSDynamicColorModifierProtocol {
    initWithLuminanceThreshold<R = unknown, P0 = number>(_initWithLuminanceThreshold: P0): R;
    luminanceThreshold<R = number>(): R;
    setLuminanceThreshold<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSHighContrastForegroundColorModifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDynamicColorModifierProtocol {
      alloc<R = NSHighContrastForegroundColorModifier>(): R;
      new: <R = NSHighContrastForegroundColorModifier>() => R;
    }
  }
}

declare const NSHighContrastForegroundColorModifier: cocoa.NSHighContrastForegroundColorModifier.CLASS;
