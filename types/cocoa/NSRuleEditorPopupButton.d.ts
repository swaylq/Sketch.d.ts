/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorPopupButton<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {}
  namespace NSRuleEditorPopupButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {
      alloc<R = NSRuleEditorPopupButton>(): R;
      new: <R = NSRuleEditorPopupButton>() => R;
    }
  }
}

declare const NSRuleEditorPopupButton: cocoa.NSRuleEditorPopupButton.CLASS;
