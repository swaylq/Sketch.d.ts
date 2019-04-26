/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDetachedTabDraggingImageToWindowTransitionController<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSDetachedTabDraggingImageToWindowTransitionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDetachedTabDraggingImageToWindowTransitionController>(): R;
      new: <R = NSDetachedTabDraggingImageToWindowTransitionController>() => R;
      detachTabAtPointOnScreen_withDraggedMiniWindow_ofWidth_withDelegate<R = void, P0 = CGPoint, P1 = unknown, P2 = number, P3 = unknown>(_detachTabAtPointOnScreen: P0, _withDraggedMiniWindow: P1, _ofWidth: P2, _withDelegate: P3): R;
    }
  }
}

declare const NSDetachedTabDraggingImageToWindowTransitionController: cocoa.NSDetachedTabDraggingImageToWindowTransitionController.CLASS;
