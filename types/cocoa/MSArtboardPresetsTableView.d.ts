/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsTableView<T0 = void, T1 = void, T2 = void> extends NSTableView {}
  namespace MSArtboardPresetsTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableView {
      alloc<R = MSArtboardPresetsTableView>(): R;
      new: <R = MSArtboardPresetsTableView>() => R;
    }
  }
}

declare const MSArtboardPresetsTableView: cocoa.MSArtboardPresetsTableView.CLASS;
