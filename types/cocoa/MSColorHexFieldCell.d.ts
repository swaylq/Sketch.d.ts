/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexFieldCell<T0 = void, T1 = void, T2 = void> extends MSInlineUpDownTextFieldCell {
    poundPrefixString<R = unknown>(): R;
  }
  namespace MSColorHexFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInlineUpDownTextFieldCell {
      alloc<R = MSColorHexFieldCell>(): R;
      new: <R = MSColorHexFieldCell>() => R;
    }
  }
}

declare const MSColorHexFieldCell: cocoa.MSColorHexFieldCell.CLASS;
