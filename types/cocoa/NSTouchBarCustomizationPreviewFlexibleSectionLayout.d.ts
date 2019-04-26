/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewFlexibleSectionLayout<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPreviewSectionLayout {
    defaultItemPadding<R = number>(): R;
    setDefaultItemPadding<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPreviewFlexibleSectionLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPreviewSectionLayout {
      alloc<R = NSTouchBarCustomizationPreviewFlexibleSectionLayout>(): R;
      new: <R = NSTouchBarCustomizationPreviewFlexibleSectionLayout>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewFlexibleSectionLayout: cocoa.NSTouchBarCustomizationPreviewFlexibleSectionLayout.CLASS;
