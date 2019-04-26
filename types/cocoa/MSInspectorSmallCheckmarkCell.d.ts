/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSmallCheckmarkCell<T0 = void, T1 = void, T2 = void> extends MSInspectorCheckmarkCell {}
  namespace MSInspectorSmallCheckmarkCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorCheckmarkCell {
      alloc<R = MSInspectorSmallCheckmarkCell>(): R;
      new: <R = MSInspectorSmallCheckmarkCell>() => R;
    }
  }
}

declare const MSInspectorSmallCheckmarkCell: cocoa.MSInspectorSmallCheckmarkCell.CLASS;
