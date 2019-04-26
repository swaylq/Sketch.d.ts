/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarRangeBackdropView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSTouchBarRangeBackdropView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTouchBarRangeBackdropView>(): R;
      new: <R = NSTouchBarRangeBackdropView>() => R;
    }
  }
}

declare const NSTouchBarRangeBackdropView: cocoa.NSTouchBarRangeBackdropView.CLASS;
