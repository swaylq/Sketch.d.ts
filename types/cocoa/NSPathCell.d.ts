/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPathCell<T0 = void, T1 = void, T2 = void> extends NSActionCell, NSMenuItemValidationProtocol, NSOpenSavePanelDelegateProtocol {}
  namespace NSPathCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSActionCell, NSMenuItemValidationProtocol, NSOpenSavePanelDelegateProtocol {
      alloc<R = NSPathCell>(): R;
      new: <R = NSPathCell>() => R;
    }
  }
}

declare const NSPathCell: cocoa.NSPathCell.CLASS;
