/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSControlTextEditingDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    control_textView_completions_forPartialWordRange_indexOfSelectedItem<R = NSArray, P0 = NSControl, P1 = NSTextView, P2 = NSArray, P3 = _NSRange, P4 = number>(_control: P0, _textView: P1, _completions: P2, _forPartialWordRange: P3, _indexOfSelectedItem: P4): R;
    control_textView_doCommandBySelector<R = boolean, P0 = NSControl, P1 = NSTextView, P2 = string>(_control: P0, _textView: P1, _doCommandBySelector: P2): R;
    control_isValidObject<R = boolean, P0 = NSControl, P1 = unknown>(_control: P0, _isValidObject: P1): R;
    control_didFailToValidatePartialString_errorDescription<R = void, P0 = NSControl, P1 = NSString, P2 = NSString>(_control: P0, _didFailToValidatePartialString: P1, _errorDescription: P2): R;
    control_didFailToFormatString_errorDescription<R = boolean, P0 = NSControl, P1 = NSString, P2 = NSString>(_control: P0, _didFailToFormatString: P1, _errorDescription: P2): R;
    control_textShouldEndEditing<R = boolean, P0 = NSControl, P1 = NSText>(_control: P0, _textShouldEndEditing: P1): R;
    control_textShouldBeginEditing<R = boolean, P0 = NSControl, P1 = NSText>(_control: P0, _textShouldBeginEditing: P1): R;
    controlTextDidChange<R = void, P0 = NSNotification>(_controlTextDidChange: P0): R;
    controlTextDidEndEditing<R = void, P0 = NSNotification>(_controlTextDidEndEditing: P0): R;
    controlTextDidBeginEditing<R = void, P0 = NSNotification>(_controlTextDidBeginEditing: P0): R;
  }
  namespace NSControlTextEditingDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
