/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    touchBar_makeItemForIdentifier<R = NSTouchBarItem, P0 = NSTouchBar, P1 = NSString>(_touchBar: P0, _makeItemForIdentifier: P1): R;
  }
  namespace NSTouchBarDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
