/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDropTargetSectionIndicator<T = any> extends cocoa.NSView {
    wantsUpdateLayer<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCollectionViewDropTargetSectionIndicator<T = any> extends cocoa.classes.NSView {
      alloc<R = NSCollectionViewDropTargetSectionIndicator>(): R;
      new: <R = NSCollectionViewDropTargetSectionIndicator>() => R;
    }
  }
}

declare const NSCollectionViewDropTargetSectionIndicator: cocoa.classes.NSCollectionViewDropTargetSectionIndicator;
