/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageOverrideView<T0 = void, T1 = void, T2 = void> extends NSImageView {
    cxx_destruct<R = void>(): R;
    removeOverrideImage<R = void, P0 = unknown>(_removeOverrideImage: P0): R;
    placeholderImage<R = NSImage>(): R;
    setPlaceholderImage<R = void, P0 = NSImage>(_v: P0): R;
    displaysPlaceholder<R = boolean>(): R;
  }
  namespace MSImageOverrideView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageView {
      alloc<R = MSImageOverrideView>(): R;
      new: <R = MSImageOverrideView>() => R;
    }
  }
}

declare const MSImageOverrideView: cocoa.MSImageOverrideView.CLASS;
