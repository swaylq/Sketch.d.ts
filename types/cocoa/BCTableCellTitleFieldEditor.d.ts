/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellTitleFieldEditor<T0 = void, T1 = void, T2 = void> extends NSTextView {
    textContainerOrigin<R = CGPoint>(): R;
  }
  namespace BCTableCellTitleFieldEditor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextView {
      alloc<R = BCTableCellTitleFieldEditor>(): R;
      new: <R = BCTableCellTitleFieldEditor>() => R;
    }
  }
}

declare const BCTableCellTitleFieldEditor: cocoa.BCTableCellTitleFieldEditor.CLASS;
