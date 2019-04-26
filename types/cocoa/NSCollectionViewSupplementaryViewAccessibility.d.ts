/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewSupplementaryViewAccessibility<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElement {
    accessibilityChildren<R = unknown>(): R;
    accessibilityRole<R = unknown>(): R;
    supplementaryView<R = unknown>(): R;
    initWithSectionAccessibility<R = unknown, P0 = unknown>(_initWithSectionAccessibility: P0): R;
    sectionAccessibility<R = NSCollectionViewSectionAccessibility>(): R;
  }
  namespace NSCollectionViewSupplementaryViewAccessibility {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityElement {
      alloc<R = NSCollectionViewSupplementaryViewAccessibility>(): R;
      new: <R = NSCollectionViewSupplementaryViewAccessibility>() => R;
    }
  }
}

declare const NSCollectionViewSupplementaryViewAccessibility: cocoa.NSCollectionViewSupplementaryViewAccessibility.CLASS;
