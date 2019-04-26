/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarSyncedButtonProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    setHighlightStateToPressed_hovered<R = void, P0 = boolean, P1 = boolean>(_setHighlightStateToPressed: P0, _hovered: P1): R;
    syncedWithOtherButton<R = boolean>(): R;
    setSyncedWithOtherButton<R = void, P0 = boolean>(_v: P0): R;
    buttonInTabSyncGroupDelegate<R = NSTabBarSyncedButtonDelegate>(): R;
    setButtonInTabSyncGroupDelegate<R = void, P0 = NSTabBarSyncedButtonDelegate>(_v: P0): R;
  }
  namespace NSTabBarSyncedButtonProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
