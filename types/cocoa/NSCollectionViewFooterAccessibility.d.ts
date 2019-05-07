/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewFooterAccessibility<T0 = void, T1 = void, T2 = void> extends NSCollectionViewSupplementaryViewAccessibility {
    accessibilityIndex<R = number>(): R;
  }
  namespace NSCollectionViewFooterAccessibility {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewSupplementaryViewAccessibility {
      alloc<R = NSCollectionViewFooterAccessibility>(): R;
      new: <R = NSCollectionViewFooterAccessibility>() => R;
    }
  }
}

declare const NSCollectionViewFooterAccessibility: cocoa.NSCollectionViewFooterAccessibility.CLASS;
