/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewSupplementaryViewAccessibility<T = any> extends NSAccessibilityElement {
    accessibilityChildren<R = unknown>(): R;
    accessibilityRole<R = unknown>(): R;
    supplementaryView<R = unknown>(): R;
    initWithSectionAccessibility<R = unknown, P0 = unknown>(_initWithSectionAccessibility: P0): R;
    sectionAccessibility<R = NSCollectionViewSectionAccessibility>(): R;
  }
  namespace classes {
    export interface NSCollectionViewSupplementaryViewAccessibility<T = any> extends NSAccessibilityElement {
      alloc<R = NSCollectionViewSupplementaryViewAccessibility>(): R;
      new: <R = NSCollectionViewSupplementaryViewAccessibility>() => R;
    }
  }
}

declare const NSCollectionViewSupplementaryViewAccessibility: cocoa.classes.NSCollectionViewSupplementaryViewAccessibility;