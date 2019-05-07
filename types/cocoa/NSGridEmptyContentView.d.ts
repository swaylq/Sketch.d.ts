/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGridEmptyContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    _allocatingPlaceholder<R = unknown>(): R;
  }
  namespace NSGridEmptyContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSGridEmptyContentView>(): R;
      new: <R = NSGridEmptyContentView>() => R;
    }
  }
}

declare const NSGridEmptyContentView: cocoa.NSGridEmptyContentView.CLASS;
