/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewAppearance<T0 = void, T1 = void, T2 = void> extends NSAppearance {}
  namespace NSTouchBarCustomizationPreviewAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAppearance {
      alloc<R = NSTouchBarCustomizationPreviewAppearance>(): R;
      new: <R = NSTouchBarCustomizationPreviewAppearance>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewAppearance: cocoa.NSTouchBarCustomizationPreviewAppearance.CLASS;
