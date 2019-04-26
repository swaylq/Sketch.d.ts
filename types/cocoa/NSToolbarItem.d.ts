/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMenuItemValidationProtocol, NSValidatedUserInterfaceItemProtocol {}
  namespace NSToolbarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMenuItemValidationProtocol, NSValidatedUserInterfaceItemProtocol {
      alloc<R = NSToolbarItem>(): R;
      new: <R = NSToolbarItem>() => R;
      allowsDuplicatesInToolbar<R = boolean>(): R;
    }
  }
}

declare const NSToolbarItem: cocoa.NSToolbarItem.CLASS;
