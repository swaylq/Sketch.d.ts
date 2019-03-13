/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackButtonContentView<T = any> extends NSView {
    isOpaque<R = boolean>(): R;
  }
  namespace classes {
    export interface MSBackButtonContentView<T = any> extends NSView {
      alloc<R = MSBackButtonContentView>(): R;
      new: <R = MSBackButtonContentView>() => R;
    }
  }
}

declare const MSBackButtonContentView: cocoa.classes.MSBackButtonContentView;