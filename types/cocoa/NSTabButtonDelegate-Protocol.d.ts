/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabButtonDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    tabButtonDidBecomeFirstResponder<R = void, P0 = NSTabButton>(_tabButtonDidBecomeFirstResponder: P0): R;
    closeTabButton<R = void, P0 = NSTabButton>(_closeTabButton: P0): R;
    selectTabButton<R = void, P0 = NSTabButton>(_selectTabButton: P0): R;
    tabButton_menuForEvent<R = NSMenu, P0 = NSTabButton, P1 = NSEvent>(_tabButton: P0, _menuForEvent: P1): R;
  }
  namespace NSTabButtonDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
