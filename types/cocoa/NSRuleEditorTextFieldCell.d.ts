/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {}
  namespace NSRuleEditorTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSRuleEditorTextFieldCell>(): R;
      new: <R = NSRuleEditorTextFieldCell>() => R;
    }
  }
}

declare const NSRuleEditorTextFieldCell: cocoa.NSRuleEditorTextFieldCell.CLASS;
