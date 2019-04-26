/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppearanceCustomizationInternalProtocol<T0 = void, T1 = void, T2 = void> extends NSAppearanceCustomizationProtocol {
    _effectiveAppearanceParent<R = NSAppearanceCustomization>(): R;
  }
  namespace NSAppearanceCustomizationInternalProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAppearanceCustomizationProtocol {}
  }
}
