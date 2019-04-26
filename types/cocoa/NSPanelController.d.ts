/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPanelController<T0 = void, T1 = void, T2 = void> extends NSObject {
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    ok<R = void, P0 = unknown>(_ok: P0): R;
    control_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_control: P0, _textView: P1, _doCommandBySelector: P2): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    stringValue<R = unknown>(): R;
    gotString<R = boolean>(): R;
    showPanel_andNotify_with<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_showPanel: P0, _andNotify: P1, _with: P2): R;
    dealloc<R = void>(): R;
    _setTextFieldStringValue<R = void, P0 = unknown>(__setTextFieldStringValue: P0): R;
  }
  namespace NSPanelController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPanelController>(): R;
      new: <R = NSPanelController>() => R;
    }
  }
}

declare const NSPanelController: cocoa.NSPanelController.CLASS;
