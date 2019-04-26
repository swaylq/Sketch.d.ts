/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGestureRecognizerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    gestureRecognizer_shouldReceiveTouch<R = boolean, P0 = NSGestureRecognizer, P1 = NSTouch>(_gestureRecognizer: P0, _shouldReceiveTouch: P1): R;
    gestureRecognizer_shouldBeRequiredToFailByGestureRecognizer<R = boolean, P0 = NSGestureRecognizer, P1 = NSGestureRecognizer>(_gestureRecognizer: P0, _shouldBeRequiredToFailByGestureRecognizer: P1): R;
    gestureRecognizer_shouldRequireFailureOfGestureRecognizer<R = boolean, P0 = NSGestureRecognizer, P1 = NSGestureRecognizer>(_gestureRecognizer: P0, _shouldRequireFailureOfGestureRecognizer: P1): R;
    gestureRecognizer_shouldRecognizeSimultaneouslyWithGestureRecognizer<R = boolean, P0 = NSGestureRecognizer, P1 = NSGestureRecognizer>(_gestureRecognizer: P0, _shouldRecognizeSimultaneouslyWithGestureRecognizer: P1): R;
    gestureRecognizerShouldBegin<R = boolean, P0 = NSGestureRecognizer>(_gestureRecognizerShouldBegin: P0): R;
    gestureRecognizer_shouldAttemptToRecognizeWithEvent<R = boolean, P0 = NSGestureRecognizer, P1 = NSEvent>(_gestureRecognizer: P0, _shouldAttemptToRecognizeWithEvent: P1): R;
  }
  namespace NSGestureRecognizerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
