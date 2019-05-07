/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentNonModalAlertViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    awakeFromNib<R = void>(): R;
    layout<R = void>(): R;
    errorToDisplay<R = NSError>(): R;
    setErrorToDisplay<R = void, P0 = NSError>(_v: P0): R;
    menu<R = NSMenu>(): R;
    setMenu<R = void, P0 = NSMenu>(_v: P0): R;
  }
  namespace NSDocumentNonModalAlertViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = NSDocumentNonModalAlertViewController>(): R;
      new: <R = NSDocumentNonModalAlertViewController>() => R;
    }
  }
}

declare const NSDocumentNonModalAlertViewController: cocoa.NSDocumentNonModalAlertViewController.CLASS;
