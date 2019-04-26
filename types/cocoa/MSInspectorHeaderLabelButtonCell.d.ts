/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorHeaderLabelButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorTweakedTextRectPopUpButtonCell {}
  namespace MSInspectorHeaderLabelButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorTweakedTextRectPopUpButtonCell {
      alloc<R = MSInspectorHeaderLabelButtonCell>(): R;
      new: <R = MSInspectorHeaderLabelButtonCell>() => R;
    }
  }
}

declare const MSInspectorHeaderLabelButtonCell: cocoa.MSInspectorHeaderLabelButtonCell.CLASS;
