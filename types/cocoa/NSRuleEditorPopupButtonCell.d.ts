/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorPopupButtonCell<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
    arrowPosition<R = number>(): R;
    sliceIsEditable<R = boolean>(): R;
  }
  namespace NSRuleEditorPopupButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
      alloc<R = NSRuleEditorPopupButtonCell>(): R;
      new: <R = NSRuleEditorPopupButtonCell>() => R;
    }
  }
}

declare const NSRuleEditorPopupButtonCell: cocoa.NSRuleEditorPopupButtonCell.CLASS;
