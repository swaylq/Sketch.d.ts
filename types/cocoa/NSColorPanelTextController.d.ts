/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelTextController<T0 = void, T1 = void, T2 = void> extends NSObject, NSTextFieldDelegateProtocol {
    acceptLastEnteredText<R = boolean>(): R;
    control_isValidObject<R = boolean, P0 = unknown, P1 = unknown>(_control: P0, _isValidObject: P1): R;
    control_didFailToFormatString_errorDescription<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_control: P0, _didFailToFormatString: P1, _errorDescription: P2): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    controlTextDidBeginEditing<R = void, P0 = unknown>(_controlTextDidBeginEditing: P0): R;
    fieldEditorTextDidChange<R = void, P0 = unknown>(_fieldEditorTextDidChange: P0): R;
    textTimerFired<R = void, P0 = unknown>(_textTimerFired: P0): R;
    setLastEditedStringValue<R = void, P0 = unknown>(_setLastEditedStringValue: P0): R;
    _forceSetLastEditedStringValue<R = void, P0 = unknown>(__forceSetLastEditedStringValue: P0): R;
    dealloc<R = void>(): R;
    startTextTimer<R = void>(): R;
    stopTextTimer<R = void>(): R;
    control_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_control: P0, _textView: P1, _doCommandBySelector: P2): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    initWithTextField_colorPanel_delegate<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithTextField: P0, _colorPanel: P1, _delegate: P2): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSColorPanelTextController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTextFieldDelegateProtocol {
      alloc<R = NSColorPanelTextController>(): R;
      new: <R = NSColorPanelTextController>() => R;
    }
  }
}

declare const NSColorPanelTextController: cocoa.NSColorPanelTextController.CLASS;
