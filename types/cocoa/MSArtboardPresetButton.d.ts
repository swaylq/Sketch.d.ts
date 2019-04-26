/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetButton<T0 = void, T1 = void, T2 = void> extends MSInspectorButton {
    cxx_destruct<R = void>(): R;
    attributedSecondaryTitle<R = unknown>(): R;
    secondaryTitle<R = NSString>(): R;
    setSecondaryTitle<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSArtboardPresetButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButton {
      alloc<R = MSArtboardPresetButton>(): R;
      new: <R = MSArtboardPresetButton>() => R;
    }
  }
}

declare const MSArtboardPresetButton: cocoa.MSArtboardPresetButton.CLASS;
