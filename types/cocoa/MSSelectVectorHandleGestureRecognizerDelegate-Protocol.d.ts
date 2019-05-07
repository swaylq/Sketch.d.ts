/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSelectVectorHandleGestureRecognizerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSGestureRecognizerDelegateProtocol {
    gestureRecognizerShouldDelaySelectionUntilMouseUp<R = boolean, P0 = MSSelectVectorHandleGestureRecognizer>(_gestureRecognizerShouldDelaySelectionUntilMouseUp: P0): R;
  }
  namespace MSSelectVectorHandleGestureRecognizerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSGestureRecognizerDelegateProtocol {}
  }
}
