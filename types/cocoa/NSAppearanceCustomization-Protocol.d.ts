/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppearanceCustomizationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    effectiveAppearance<R = NSAppearance>(): R;
    appearance<R = NSAppearance>(): R;
    setAppearance<R = void, P0 = NSAppearance>(_v: P0): R;
  }
  namespace NSAppearanceCustomizationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
