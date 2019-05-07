/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
    cxx_destruct<R = void>(): R;
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    sizeLabel<R = NSTextField>(): R;
    setSizeLabel<R = void, P0 = NSTextField>(_v: P0): R;
    checkmark<R = NSImageView>(): R;
    setCheckmark<R = void, P0 = NSImageView>(_v: P0): R;
  }
  namespace MSArtboardPresetTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = MSArtboardPresetTableCellView>(): R;
      new: <R = MSArtboardPresetTableCellView>() => R;
    }
  }
}

declare const MSArtboardPresetTableCellView: cocoa.MSArtboardPresetTableCellView.CLASS;
