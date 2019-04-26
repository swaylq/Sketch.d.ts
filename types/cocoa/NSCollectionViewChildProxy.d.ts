/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewChildProxy<T0 = void, T1 = void, T2 = void> extends NSAccessibilityProxy {
    accessibilityIsSizeAttributeSettable<R = boolean>(): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityIsPositionAttributeSettable<R = boolean>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityIsWindowAttributeSettable<R = boolean>(): R;
    accessibilityWindowAttribute<R = unknown>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityIsParentAttributeSettable<R = boolean>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    item<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithIndex_collectionView<R = unknown, P0 = number, P1 = unknown>(_initWithIndex: P0, _collectionView: P1): R;
  }
  namespace NSCollectionViewChildProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityProxy {
      alloc<R = NSCollectionViewChildProxy>(): R;
      new: <R = NSCollectionViewChildProxy>() => R;
      proxyForItemAtIndex_collectionView<R = unknown, P0 = number, P1 = unknown>(_proxyForItemAtIndex: P0, _collectionView: P1): R;
    }
  }
}

declare const NSCollectionViewChildProxy: cocoa.NSCollectionViewChildProxy.CLASS;
