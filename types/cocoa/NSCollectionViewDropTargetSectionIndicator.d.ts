/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDropTargetSectionIndicator<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
  }
  namespace NSCollectionViewDropTargetSectionIndicator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSCollectionViewDropTargetSectionIndicator>(): R;
      new: <R = NSCollectionViewDropTargetSectionIndicator>() => R;
    }
  }
}

declare const NSCollectionViewDropTargetSectionIndicator: cocoa.NSCollectionViewDropTargetSectionIndicator.CLASS;
