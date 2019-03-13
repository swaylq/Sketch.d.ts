/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageViewWithConfigurableVibrancy<T = any> extends NSImageView {
    allowsVibrancy<R = boolean>(): R;
    setAllowsVibrancy<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSImageViewWithConfigurableVibrancy<T = any> extends NSImageView {
      alloc<R = _NSImageViewWithConfigurableVibrancy>(): R;
      new: <R = _NSImageViewWithConfigurableVibrancy>() => R;
    }
  }
}