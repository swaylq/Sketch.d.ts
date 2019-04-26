/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarSyncedButtonDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    button_didSetHighlightStateToPressed_hovered<R = void, P0 = NSTabBarSyncedButton, P1 = boolean, P2 = boolean>(_button: P0, _didSetHighlightStateToPressed: P1, _hovered: P2): R;
  }
  namespace NSTabBarSyncedButtonDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
