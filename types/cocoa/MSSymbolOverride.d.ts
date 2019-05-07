/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolOverride<T0 = void, T1 = void, T2 = void> extends MSAvailableOverride {
    addChild<R = void, P0 = unknown>(_addChild: P0): R;
    children<R = unknown>(): R;
    internalChildren<R = NSArray>(): R;
  }
  namespace MSSymbolOverride {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAvailableOverride {
      alloc<R = MSSymbolOverride>(): R;
      new: <R = MSSymbolOverride>() => R;
    }
  }
}

declare const MSSymbolOverride: cocoa.MSSymbolOverride.CLASS;
