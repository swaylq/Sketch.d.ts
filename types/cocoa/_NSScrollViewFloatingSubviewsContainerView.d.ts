/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollViewFloatingSubviewsContainerView<T0 = void, T1 = void, T2 = void> extends NSView {
    setCanDrawSubviewsIntoLayer<R = void, P0 = boolean>(_setCanDrawSubviewsIntoLayer: P0): R;
    _subViewCount<R = number>(): R;
  }
  namespace _NSScrollViewFloatingSubviewsContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSScrollViewFloatingSubviewsContainerView>(): R;
      new: <R = _NSScrollViewFloatingSubviewsContainerView>() => R;
    }
  }
}
