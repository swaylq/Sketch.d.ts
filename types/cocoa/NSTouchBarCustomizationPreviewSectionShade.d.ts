/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewSectionShade<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol, NSAccessibilityButtonProtocol {
    accessibilityLabel<R = NSString>(): R;
    setAccessibilityLabel<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPreviewSectionShade {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol, NSAccessibilityButtonProtocol {
      alloc<R = NSTouchBarCustomizationPreviewSectionShade>(): R;
      new: <R = NSTouchBarCustomizationPreviewSectionShade>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewSectionShade: cocoa.NSTouchBarCustomizationPreviewSectionShade.CLASS;
