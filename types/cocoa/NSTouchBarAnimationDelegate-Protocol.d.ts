/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarAnimationDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    touchBar_shouldAnimateFromIdentifiers_toIdentifiers<R = boolean, P0 = NSTouchBar, P1 = NSArray, P2 = NSArray>(_touchBar: P0, _shouldAnimateFromIdentifiers: P1, _toIdentifiers: P2): R;
  }
  namespace NSTouchBarAnimationDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
