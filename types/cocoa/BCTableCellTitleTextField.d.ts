/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellTitleTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {
    processLeftMouseDownEvent_withinFloatingRowView<R = boolean, P0 = unknown, P1 = unknown>(_processLeftMouseDownEvent: P0, _withinFloatingRowView: P1): R;
  }
  namespace BCTableCellTitleTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = BCTableCellTitleTextField>(): R;
      new: <R = BCTableCellTitleTextField>() => R;
    }
  }
}

declare const BCTableCellTitleTextField: cocoa.BCTableCellTitleTextField.CLASS;
