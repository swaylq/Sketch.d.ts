/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorPopUpButtonCell<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
    shouldDrawImage<R = boolean>(): R;
  }
  namespace MSMirrorPopUpButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
      alloc<R = MSMirrorPopUpButtonCell>(): R;
      new: <R = MSMirrorPopUpButtonCell>() => R;
    }
  }
}

declare const MSMirrorPopUpButtonCell: cocoa.MSMirrorPopUpButtonCell.CLASS;
