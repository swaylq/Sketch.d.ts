/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewHeaderAccessibility<T0 = void, T1 = void, T2 = void> extends NSCollectionViewSupplementaryViewAccessibility {
    accessibilityIndex<R = number>(): R;
  }
  namespace NSCollectionViewHeaderAccessibility {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewSupplementaryViewAccessibility {
      alloc<R = NSCollectionViewHeaderAccessibility>(): R;
      new: <R = NSCollectionViewHeaderAccessibility>() => R;
    }
  }
}

declare const NSCollectionViewHeaderAccessibility: cocoa.NSCollectionViewHeaderAccessibility.CLASS;
