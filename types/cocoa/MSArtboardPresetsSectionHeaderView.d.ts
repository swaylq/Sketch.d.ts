/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsSectionHeaderView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {}
  namespace MSArtboardPresetsSectionHeaderView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = MSArtboardPresetsSectionHeaderView>(): R;
      new: <R = MSArtboardPresetsSectionHeaderView>() => R;
    }
  }
}

declare const MSArtboardPresetsSectionHeaderView: cocoa.MSArtboardPresetsSectionHeaderView.CLASS;
