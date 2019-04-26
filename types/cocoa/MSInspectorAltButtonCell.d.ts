/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorAltButtonCell<T0 = void, T1 = void, T2 = void> extends MSAltButtonCell {}
  namespace MSInspectorAltButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAltButtonCell {
      alloc<R = MSInspectorAltButtonCell>(): R;
      new: <R = MSInspectorAltButtonCell>() => R;
    }
  }
}

declare const MSInspectorAltButtonCell: cocoa.MSInspectorAltButtonCell.CLASS;
