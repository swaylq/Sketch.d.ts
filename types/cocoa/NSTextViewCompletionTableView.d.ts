/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewCompletionTableView<T0 = void, T1 = void, T2 = void> extends NSTableView {
    _accessibilityWantsToBeList<R = boolean>(): R;
  }
  namespace NSTextViewCompletionTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableView {
      alloc<R = NSTextViewCompletionTableView>(): R;
      new: <R = NSTextViewCompletionTableView>() => R;
    }
  }
}

declare const NSTextViewCompletionTableView: cocoa.NSTextViewCompletionTableView.CLASS;
