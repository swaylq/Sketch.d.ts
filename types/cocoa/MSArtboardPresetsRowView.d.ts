/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsRowView<T0 = void, T1 = void, T2 = void> extends NSTableRowView {}
  namespace MSArtboardPresetsRowView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableRowView {
      alloc<R = MSArtboardPresetsRowView>(): R;
      new: <R = MSArtboardPresetsRowView>() => R;
    }
  }
}

declare const MSArtboardPresetsRowView: cocoa.MSArtboardPresetsRowView.CLASS;
