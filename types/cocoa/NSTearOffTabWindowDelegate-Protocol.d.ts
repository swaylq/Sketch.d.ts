/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTearOffTabWindowDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    detachWindowForTearOffTabWindow<R = NSWindow, P0 = NSTearOffTabWindow>(_detachWindowForTearOffTabWindow: P0): R;
  }
  namespace NSTearOffTabWindowDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
