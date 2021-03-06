/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuItemValidationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    validateMenuItem<R = boolean, P0 = NSMenuItem>(_validateMenuItem: P0): R;
  }
  namespace NSMenuItemValidationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
