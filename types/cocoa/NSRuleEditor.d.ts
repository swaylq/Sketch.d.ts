/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditor<T0 = void, T1 = void, T2 = void> extends NSControl {}
  namespace NSRuleEditor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl {
      alloc<R = NSRuleEditor>(): R;
      new: <R = NSRuleEditor>() => R;
    }
  }
}

declare const NSRuleEditor: cocoa.NSRuleEditor.CLASS;
