/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowBackgroundBlurViewBackdropLayer<T0 = void, T1 = void, T2 = void> extends CABackdropLayer {
    _disable<R = void>(): R;
    _enable<R = void>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    init<R = unknown>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
  }
  namespace _NSFunctionRowBackgroundBlurViewBackdropLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CABackdropLayer {
      defaultValueForKey<R = unknown, P0 = unknown>(_defaultValueForKey: P0): R;
    }
  }
}
