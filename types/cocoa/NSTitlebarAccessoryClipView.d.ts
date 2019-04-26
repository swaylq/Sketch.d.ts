/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarAccessoryClipView<T0 = void, T1 = void, T2 = void> extends NSClipView {}
  namespace NSTitlebarAccessoryClipView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSClipView {
      alloc<R = NSTitlebarAccessoryClipView>(): R;
      new: <R = NSTitlebarAccessoryClipView>() => R;
    }
  }
}

declare const NSTitlebarAccessoryClipView: cocoa.NSTitlebarAccessoryClipView.CLASS;
