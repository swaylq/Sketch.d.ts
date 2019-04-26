/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewLayoutSectionAccessibility<T0 = void, T1 = void, T2 = void> extends NSCollectionViewSectionAccessibility {
    accessibilityIsHiddenAttributeSettable<R = boolean>(): R;
    accessibilityHiddenAttribute<R = unknown>(): R;
    isAccessibilityHidden<R = boolean>(): R;
    sectionLayoutDelegate<R = unknown>(): R;
    sectionLayout<R = unknown>(): R;
  }
  namespace NSTouchBarCustomizationPreviewLayoutSectionAccessibility {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewSectionAccessibility {
      alloc<R = NSTouchBarCustomizationPreviewLayoutSectionAccessibility>(): R;
      new: <R = NSTouchBarCustomizationPreviewLayoutSectionAccessibility>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewLayoutSectionAccessibility: cocoa.NSTouchBarCustomizationPreviewLayoutSectionAccessibility.CLASS;
