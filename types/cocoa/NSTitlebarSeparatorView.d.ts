/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarSeparatorView<T = any> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    allowsVibrancy<R = boolean>(): R;
    _cuiOptions<R = unknown>(): R;
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSTitlebarSeparatorView<T = any> extends NSView {
      alloc<R = NSTitlebarSeparatorView>(): R;
      new: <R = NSTitlebarSeparatorView>() => R;
    }
  }
}

declare const NSTitlebarSeparatorView: cocoa.classes.NSTitlebarSeparatorView;
