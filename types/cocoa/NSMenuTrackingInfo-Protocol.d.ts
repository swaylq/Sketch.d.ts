/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuTrackingInfoProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    targetedItemFrame<R = CGRect>(): R;
    targetedItem<R = NSMenuItem>(): R;
    selectedItem<R = NSMenuItem>(): R;
    menu<R = NSMenu>(): R;
  }
  namespace NSMenuTrackingInfoProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
