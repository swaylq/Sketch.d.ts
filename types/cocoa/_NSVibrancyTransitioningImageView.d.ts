/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSVibrancyTransitioningImageView<T0 = void, T1 = void, T2 = void> extends NSView {
    delegate<R = _NSVibrancyTransitioningImageViewDelegate>(): R;
    setDelegate<R = void, P0 = _NSVibrancyTransitioningImageViewDelegate>(_v: P0): R;
  }
  namespace _NSVibrancyTransitioningImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSVibrancyTransitioningImageView>(): R;
      new: <R = _NSVibrancyTransitioningImageView>() => R;
    }
  }
}
