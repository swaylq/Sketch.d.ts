/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CIColor<T0 = void, T1 = void, T2 = void> {
    // + CIColor(NSAppKitAdditions): 
    initWithColor<R = unknown, P0 = unknown>(_initWithColor: P0): R;
  }
  namespace CIColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const CIColor: cocoa.CIColor.CLASS;
