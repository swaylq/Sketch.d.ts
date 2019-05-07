/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerLabelCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    _setAuxiliaryFormatter<R = void, P0 = unknown>(__setAuxiliaryFormatter: P0): R;
    _auxiliaryFormatter<R = unknown>(): R;
  }
  namespace NSRulerLabelCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSRulerLabelCell>(): R;
      new: <R = NSRulerLabelCell>() => R;
    }
  }
}

declare const NSRulerLabelCell: cocoa.NSRulerLabelCell.CLASS;
