/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    setRuleEditorButtonType<R = void, P0 = number>(_setRuleEditorButtonType: P0): R;
  }
  namespace NSRuleEditorButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = NSRuleEditorButtonCell>(): R;
      new: <R = NSRuleEditorButtonCell>() => R;
    }
  }
}

declare const NSRuleEditorButtonCell: cocoa.NSRuleEditorButtonCell.CLASS;
