/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentAutomatedTestVBLPreprocessFilter<T0 = void, T1 = void, T2 = void> extends _NSScrollingConcurrentVBLPreprocessFilter {
    initWithConstantData<R = unknown, P0 = unknown>(_initWithConstantData: P0): R;
    maxScrollValue<R = number>(): R;
    setMaxScrollValue<R = void, P0 = number>(_v: P0): R;
    minScrollValue<R = number>(): R;
    setMinScrollValue<R = void, P0 = number>(_v: P0): R;
    scrollAxis<R = number>(): R;
    setScrollAxis<R = void, P0 = number>(_v: P0): R;
    scrollSetpSize<R = number>(): R;
    setScrollSetpSize<R = void, P0 = number>(_v: P0): R;
    scrollLaps<R = number>(): R;
    setScrollLaps<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSScrollingConcurrentAutomatedTestVBLPreprocessFilter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSScrollingConcurrentVBLPreprocessFilter {
      alloc<R = _NSScrollingConcurrentAutomatedTestVBLPreprocessFilter>(): R;
      new: <R = _NSScrollingConcurrentAutomatedTestVBLPreprocessFilter>() => R;
    }
  }
}
