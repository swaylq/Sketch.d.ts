/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInlineButtonBezelView<T = any> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    bezelState<R = number>(): R;
    setBezelState<R = void, P0 = number>(_v: P0): R;
    backgroundStyle<R = number>(): R;
    setBackgroundStyle<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSInlineButtonBezelView<T = any> extends NSView {
      alloc<R = _NSInlineButtonBezelView>(): R;
      new: <R = _NSInlineButtonBezelView>() => R;
    }
  }
}
