/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    textDidChange<R = void, P0 = NSNotification>(_textDidChange: P0): R;
    textDidEndEditing<R = void, P0 = NSNotification>(_textDidEndEditing: P0): R;
    textDidBeginEditing<R = void, P0 = NSNotification>(_textDidBeginEditing: P0): R;
    textShouldEndEditing<R = boolean, P0 = NSText>(_textShouldEndEditing: P0): R;
    textShouldBeginEditing<R = boolean, P0 = NSText>(_textShouldBeginEditing: P0): R;
  }
  namespace NSTextDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
