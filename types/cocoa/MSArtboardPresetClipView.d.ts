/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetClipView<T0 = void, T1 = void, T2 = void> extends NSClipView {}
  namespace MSArtboardPresetClipView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSClipView {
      alloc<R = MSArtboardPresetClipView>(): R;
      new: <R = MSArtboardPresetClipView>() => R;
    }
  }
}

declare const MSArtboardPresetClipView: cocoa.MSArtboardPresetClipView.CLASS;
