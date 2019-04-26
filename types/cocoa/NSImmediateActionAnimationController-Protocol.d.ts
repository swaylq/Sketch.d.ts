/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImmediateActionAnimationControllerProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    recognizerDidDismissAnimation<R = void, P0 = NSImmediateActionGestureRecognizer>(_recognizerDidDismissAnimation: P0): R;
    recognizerDidCompleteAnimation<R = void, P0 = NSImmediateActionGestureRecognizer>(_recognizerDidCompleteAnimation: P0): R;
    recognizerDidCancelAnimation<R = void, P0 = NSImmediateActionGestureRecognizer>(_recognizerDidCancelAnimation: P0): R;
    recognizerDidUpdateAnimation<R = void, P0 = NSImmediateActionGestureRecognizer>(_recognizerDidUpdateAnimation: P0): R;
    recognizerWillBeginAnimation<R = void, P0 = NSImmediateActionGestureRecognizer>(_recognizerWillBeginAnimation: P0): R;
  }
  namespace NSImmediateActionAnimationControllerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
