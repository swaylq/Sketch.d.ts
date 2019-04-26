/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarCollectionViewItemView<T0 = void, T1 = void, T2 = void> extends NSView {
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSToolbarCollectionViewItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSToolbarCollectionViewItemView>(): R;
      new: <R = NSToolbarCollectionViewItemView>() => R;
    }
  }
}

declare const NSToolbarCollectionViewItemView: cocoa.NSToolbarCollectionViewItemView.CLASS;
