/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTitleControlCrossFadeAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    _windowWillStartLiveResize<R = void, P0 = unknown>(__windowWillStartLiveResize: P0): R;
    invalidate<R = void>(): R;
    startAnimation<R = void>(): R;
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    dealloc<R = void>(): R;
    _screen<R = unknown>(): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
    endingFrame<R = CGRect>(): R;
    setEndingFrame<R = void, P0 = CGRect>(_v: P0): R;
    endingSnapshot<R = NSBitmapImageRep>(): R;
    setEndingSnapshot<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
    startingFrame<R = CGRect>(): R;
    setStartingFrame<R = void, P0 = CGRect>(_v: P0): R;
    startingSnapshot<R = NSBitmapImageRep>(): R;
    setStartingSnapshot<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
  }
  namespace _NSTitleControlCrossFadeAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = _NSTitleControlCrossFadeAnimation>(): R;
      new: <R = _NSTitleControlCrossFadeAnimation>() => R;
    }
  }
}
