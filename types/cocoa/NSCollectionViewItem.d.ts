/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewItem<T0 = void, T1 = void, T2 = void> extends NSViewController, NSCopyingProtocol, NSCollectionViewElementProtocol {}
  namespace NSCollectionViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSCopyingProtocol, NSCollectionViewElementProtocol {
      alloc<R = NSCollectionViewItem>(): R;
      new: <R = NSCollectionViewItem>() => R;
      _collectionViewItemForView<R = unknown, P0 = unknown>(__collectionViewItemForView: P0): R;
    }
  }
}

declare const NSCollectionViewItem: cocoa.NSCollectionViewItem.CLASS;
