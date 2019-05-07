/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    classForCoder<R = unknown>(): R;
  }
  namespace NSRuleEditorButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = NSRuleEditorButton>(): R;
      new: <R = NSRuleEditorButton>() => R;
    }
  }
}

declare const NSRuleEditorButton: cocoa.NSRuleEditorButton.CLASS;
