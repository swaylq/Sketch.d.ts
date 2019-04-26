/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COSAlertWindow<T0 = void, T1 = void, T2 = void> extends NSObject {
    addTextFieldWithValue<R = void, P0 = NSString>(_addTextFieldWithValue: P0): R;
    addAccessoryView<R = void, P0 = NSView>(_addAccessoryView: P0): R;
    alert<R = NSAlert>(): R;
    setAlert<R = void, P0 = NSAlert>(_v: P0): R;
  }
  namespace COSAlertWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = COSAlertWindow>(): R;
      new: <R = COSAlertWindow>() => R;
    }
  }
}

declare const COSAlertWindow: cocoa.COSAlertWindow.CLASS;
