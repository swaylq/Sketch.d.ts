/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorButton<T = any> extends NSButton {
    classForCoder<R = unknown>(): R;
  }
  namespace classes {
    export interface NSRuleEditorButton<T = any> extends NSButton {
      alloc<R = NSRuleEditorButton>(): R;
      new: <R = NSRuleEditorButton>() => R;
    }
  }
}

declare const NSRuleEditorButton: cocoa.classes.NSRuleEditorButton;