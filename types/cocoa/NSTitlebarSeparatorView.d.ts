/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarSeparatorView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    allowsVibrancy<R = boolean>(): R;
    _cuiOptions<R = unknown>(): R;
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTitlebarSeparatorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTitlebarSeparatorView>(): R;
      new: <R = NSTitlebarSeparatorView>() => R;
    }
  }
}

declare const NSTitlebarSeparatorView: cocoa.NSTitlebarSeparatorView.CLASS;
