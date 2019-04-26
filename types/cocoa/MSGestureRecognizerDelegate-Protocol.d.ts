/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGestureRecognizerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    gestureRecognizer_shouldAttemptToRecognizeAtPoint_modifierFlags<R = boolean, P0 = MSGestureRecognizer, P1 = CGPoint, P2 = number>(_gestureRecognizer: P0, _shouldAttemptToRecognizeAtPoint: P1, _modifierFlags: P2): R;
  }
  namespace MSGestureRecognizerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
