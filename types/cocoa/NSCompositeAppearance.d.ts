/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompositeAppearance<T0 = void, T1 = void, T2 = void> extends NSAppearance {
    _updateSystemTintColor<R = void>(): R;
    compositeName<R = unknown>(): R;
    _appearanceByMapping<R = unknown, P0 = CDUnknownBlockType>(__appearanceByMapping: P0): R;
    allowsVibrancy<R = boolean>(): R;
    initWithAppearances<R = unknown, P0 = unknown>(_initWithAppearances: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    appearances<R = NSArray>(): R;
    setAppearances<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSCompositeAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAppearance {
      alloc<R = NSCompositeAppearance>(): R;
      new: <R = NSCompositeAppearance>() => R;
      compositeAppearanceForView<R = unknown, P0 = unknown>(_compositeAppearanceForView: P0): R;
    }
  }
}

declare const NSCompositeAppearance: cocoa.NSCompositeAppearance.CLASS;
