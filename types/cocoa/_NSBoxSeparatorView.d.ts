/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBoxSeparatorView<T0 = void, T1 = void, T2 = void> extends NSView {
    allowsVibrancy<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
  }
  namespace _NSBoxSeparatorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSBoxSeparatorView>(): R;
      new: <R = _NSBoxSeparatorView>() => R;
    }
  }
}
