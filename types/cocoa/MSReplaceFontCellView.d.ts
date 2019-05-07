/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceFontCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
    cxx_destruct<R = void>(): R;
    fontWeightPopUpButton<R = NSPopUpButton>(): R;
    setFontWeightPopUpButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    fontFamilyButton<R = NSButton>(): R;
    setFontFamilyButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace MSReplaceFontCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = MSReplaceFontCellView>(): R;
      new: <R = MSReplaceFontCellView>() => R;
    }
  }
}

declare const MSReplaceFontCellView: cocoa.MSReplaceFontCellView.CLASS;
