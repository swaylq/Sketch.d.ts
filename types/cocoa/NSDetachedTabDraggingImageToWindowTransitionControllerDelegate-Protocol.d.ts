/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDetachedTabDraggingImageToWindowTransitionControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    detachedTabDraggingImageToWindowTransitionController_didFinishTransitionAnimationForWindow<R = void, P0 = NSDetachedTabDraggingImageToWindowTransitionController, P1 = NSWindow>(_detachedTabDraggingImageToWindowTransitionController: P0, _didFinishTransitionAnimationForWindow: P1): R;
    destinationWindowForDetachedTabDraggingImageToWindowTransitionController<R = NSWindow, P0 = NSDetachedTabDraggingImageToWindowTransitionController>(_destinationWindowForDetachedTabDraggingImageToWindowTransitionController: P0): R;
    destinationWindowShouldMoveToDropPointInSpace_forDetachedTabDraggingImageToWindowTransitionController<R = boolean, P0 = number, P1 = NSDetachedTabDraggingImageToWindowTransitionController>(_destinationWindowShouldMoveToDropPointInSpace: P0, _forDetachedTabDraggingImageToWindowTransitionController: P1): R;
  }
  namespace NSDetachedTabDraggingImageToWindowTransitionControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
