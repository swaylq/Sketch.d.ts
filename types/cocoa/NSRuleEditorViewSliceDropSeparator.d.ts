/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRuleEditorViewSliceDropSeparator<T0 = void, T1 = void, T2 = void> extends NSRuleEditorViewSlice {}
  namespace NSRuleEditorViewSliceDropSeparator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSRuleEditorViewSlice {
      alloc<R = NSRuleEditorViewSliceDropSeparator>(): R;
      new: <R = NSRuleEditorViewSliceDropSeparator>() => R;
    }
  }
}

declare const NSRuleEditorViewSliceDropSeparator: cocoa.NSRuleEditorViewSliceDropSeparator.CLASS;
