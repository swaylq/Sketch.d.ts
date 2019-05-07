/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDropTargetGapIndicator<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSCollectionViewDropTargetGapIndicator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSCollectionViewDropTargetGapIndicator>(): R;
      new: <R = NSCollectionViewDropTargetGapIndicator>() => R;
    }
  }
}

declare const NSCollectionViewDropTargetGapIndicator: cocoa.NSCollectionViewDropTargetGapIndicator.CLASS;
