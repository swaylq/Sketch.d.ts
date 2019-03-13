/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRolloverButtonDelegateProtocol<T = any> extends NSObjectProtocol {
    setShowingCloseButton<R = void, P0 = boolean>(_setShowingCloseButton: P0): R;
    rolloverButtonDidResignFirstResponder<R = void, P0 = NSRolloverButton>(_rolloverButtonDidResignFirstResponder: P0): R;
    rolloverButtonDidBecomeFirstResponder<R = void, P0 = NSRolloverButton>(_rolloverButtonDidBecomeFirstResponder: P0): R;
  }
  namespace classes {
    export interface NSRolloverButtonDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}