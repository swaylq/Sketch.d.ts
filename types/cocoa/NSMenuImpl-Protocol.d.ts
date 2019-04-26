/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuImplProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    _principalMenuRef<R = OpaqueMenuRef>(): R;
    _menuItem_atIndex_didChangeDestructiveFrom_to<R = void, P0 = NSMenuItem, P1 = number, P2 = boolean, P3 = boolean>(__menuItem: P0, _atIndex: P1, _didChangeDestructiveFrom: P2, _to: P3): R;
    _menuItem_atIndex_didChangeAlternateFrom_to<R = void, P0 = NSMenuItem, P1 = number, P2 = boolean, P3 = boolean>(__menuItem: P0, _atIndex: P1, _didChangeAlternateFrom: P2, _to: P3): R;
    _menuDidRemoveAllItems<R = void, P0 = NSArray>(__menuDidRemoveAllItems: P0): R;
    _cancelTrackingWithAnimation<R = void, P0 = boolean>(__cancelTrackingWithAnimation: P0): R;
    targetedItem<R = NSMenuItem>(): R;
    _presentingView<R = NSView>(): R;
  }
  namespace NSMenuImplProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
