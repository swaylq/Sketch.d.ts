/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageView<T0 = void, T1 = void, T2 = void> extends NSImageView {
    webpURLFromDragData<R = unknown, P0 = unknown>(_webpURLFromDragData: P0): R;
  }
  namespace MSImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageView {
      alloc<R = MSImageView>(): R;
      new: <R = MSImageView>() => R;
    }
  }
}

declare const MSImageView: cocoa.MSImageView.CLASS;
