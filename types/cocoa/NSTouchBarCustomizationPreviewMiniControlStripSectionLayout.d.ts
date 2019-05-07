/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewMiniControlStripSectionLayout<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPreviewSectionLayout {
    cachedGrabberMaxXPosition<R = number>(): R;
  }
  namespace NSTouchBarCustomizationPreviewMiniControlStripSectionLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPreviewSectionLayout {
      alloc<R = NSTouchBarCustomizationPreviewMiniControlStripSectionLayout>(): R;
      new: <R = NSTouchBarCustomizationPreviewMiniControlStripSectionLayout>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewMiniControlStripSectionLayout: cocoa.NSTouchBarCustomizationPreviewMiniControlStripSectionLayout.CLASS;
