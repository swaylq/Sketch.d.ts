/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorStylePopUpCell<T0 = void, T1 = void, T2 = void> extends MSInspectorPopUpButtonCell {}
  namespace MSInspectorStylePopUpCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorPopUpButtonCell {
      alloc<R = MSInspectorStylePopUpCell>(): R;
      new: <R = MSInspectorStylePopUpCell>() => R;
    }
  }
}

declare const MSInspectorStylePopUpCell: cocoa.MSInspectorStylePopUpCell.CLASS;
