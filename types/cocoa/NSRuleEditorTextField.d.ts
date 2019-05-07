/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {}
  namespace NSRuleEditorTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = NSRuleEditorTextField>(): R;
      new: <R = NSRuleEditorTextField>() => R;
    }
  }
}

declare const NSRuleEditorTextField: cocoa.NSRuleEditorTextField.CLASS;
