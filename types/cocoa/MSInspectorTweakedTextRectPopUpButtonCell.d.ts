/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTweakedTextRectPopUpButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorPopUpButtonCell {}
  namespace MSInspectorTweakedTextRectPopUpButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorPopUpButtonCell {
      alloc<R = MSInspectorTweakedTextRectPopUpButtonCell>(): R;
      new: <R = MSInspectorTweakedTextRectPopUpButtonCell>() => R;
    }
  }
}

declare const MSInspectorTweakedTextRectPopUpButtonCell: cocoa.MSInspectorTweakedTextRectPopUpButtonCell.CLASS;
