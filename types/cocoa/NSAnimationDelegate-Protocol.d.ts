/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimationDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    animation_didReachProgressMark<R = void, P0 = NSAnimation, P1 = number>(_animation: P0, _didReachProgressMark: P1): R;
    animation_valueForProgress<R = number, P0 = NSAnimation, P1 = number>(_animation: P0, _valueForProgress: P1): R;
    animationDidEnd<R = void, P0 = NSAnimation>(_animationDidEnd: P0): R;
    animationDidStop<R = void, P0 = NSAnimation>(_animationDidStop: P0): R;
    animationShouldStart<R = boolean, P0 = NSAnimation>(_animationShouldStart: P0): R;
  }
  namespace NSAnimationDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
