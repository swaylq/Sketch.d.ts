/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSTextListTouchBarViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {}
  namespace __NSTextListTouchBarViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = __NSTextListTouchBarViewController>(): R;
      new: <R = __NSTextListTouchBarViewController>() => R;
      textListFormats<R = unknown>(): R;
    }
  }
}
