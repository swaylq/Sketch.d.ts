/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMorphingDragImageController<T0 = void, T1 = void, T2 = void> extends NSObject, NSTearOffTabWindowDelegateProtocol {}
  namespace NSMorphingDragImageController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTearOffTabWindowDelegateProtocol {
      alloc<R = NSMorphingDragImageController>(): R;
      new: <R = NSMorphingDragImageController>() => R;
      dragTabWithDraggingItem_tabButtonImage_pinnedTabButtonImage_windowImage_fromView_at_source<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = CGPoint, P6 = unknown>(_dragTabWithDraggingItem: P0, _tabButtonImage: P1, _pinnedTabButtonImage: P2, _windowImage: P3, _fromView: P4, _at: P5, _source: P6): R;
    }
  }
}

declare const NSMorphingDragImageController: cocoa.NSMorphingDragImageController.CLASS;
