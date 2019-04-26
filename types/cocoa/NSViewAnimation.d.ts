/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    _drawView<R = boolean, P0 = unknown>(__drawView: P0): R;
    _stopAnimation_withDisplayLink<R = void, P0 = number, P1 = unknown>(__stopAnimation: P0, _withDisplayLink: P1): R;
    _freeViewAnimationInfo<R = void>(): R;
    _startAnimation<R = void>(): R;
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    dealloc<R = void>(): R;
    initWithViewAnimations<R = unknown, P0 = unknown>(_initWithViewAnimations: P0): R;
    _screen<R = unknown>(): R;
    _clearAnimationInfo<R = void>(): R;
    _setupAnimationInfo<R = void>(): R;
    viewAnimations<R = NSArray>(): R;
    setViewAnimations<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSViewAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = NSViewAnimation>(): R;
      new: <R = NSViewAnimation>() => R;
    }
  }
}

declare const NSViewAnimation: cocoa.NSViewAnimation.CLASS;
