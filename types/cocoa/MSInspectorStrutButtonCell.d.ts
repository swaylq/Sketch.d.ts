/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorStrutButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorToggleImageButtonCell {}
  namespace MSInspectorStrutButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorToggleImageButtonCell {
      alloc<R = MSInspectorStrutButtonCell>(): R;
      new: <R = MSInspectorStrutButtonCell>() => R;
    }
  }
}

declare const MSInspectorStrutButtonCell: cocoa.MSInspectorStrutButtonCell.CLASS;
