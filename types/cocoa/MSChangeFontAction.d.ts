/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFontAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    changeTextLayerFont<R = void, P0 = unknown>(_changeTextLayerFont: P0): R;
  }
  namespace MSChangeFontAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSChangeFontAction>(): R;
      new: <R = MSChangeFontAction>() => R;
    }
  }
}

declare const MSChangeFontAction: cocoa.MSChangeFontAction.CLASS;
