/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetClipView<T = any> extends cocoa.NSClipView {}
  namespace classes {
    export interface MSArtboardPresetClipView<T = any> extends cocoa.classes.NSClipView {
      alloc<R = MSArtboardPresetClipView>(): R;
      new: <R = MSArtboardPresetClipView>() => R;
    }
  }
}

declare const MSArtboardPresetClipView: cocoa.classes.MSArtboardPresetClipView;
