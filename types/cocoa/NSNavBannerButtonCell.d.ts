/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavBannerButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    isEnabled<R = boolean>(): R;
    _setupAttributes<R = void>(): R;
    disabledWhenInactive<R = boolean>(): R;
    setDisabledWhenInactive<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSNavBannerButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSNavBannerButtonCell>(): R;
      new: <R = NSNavBannerButtonCell>() => R;
    }
  }
}

declare const NSNavBannerButtonCell: cocoa.NSNavBannerButtonCell.CLASS;
