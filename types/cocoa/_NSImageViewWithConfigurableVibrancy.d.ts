/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageViewWithConfigurableVibrancy<T0 = void, T1 = void, T2 = void> extends NSImageView {
    allowsVibrancy<R = boolean>(): R;
    setAllowsVibrancy<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSImageViewWithConfigurableVibrancy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageView {
      alloc<R = _NSImageViewWithConfigurableVibrancy>(): R;
      new: <R = _NSImageViewWithConfigurableVibrancy>() => R;
    }
  }
}
