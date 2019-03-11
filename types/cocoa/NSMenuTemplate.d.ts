/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuTemplate<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    numberOfItems<R = number>(): R;
    _setOwnedByPopUp<R = void, P0 = unknown>(__setOwnedByPopUp: P0): R;
    _isEnabled<R = boolean>(): R;
    _setEnabled<R = void, P0 = boolean>(__setEnabled: P0): R;
    nibInstantiate<R = unknown>(): R;
    _pullsDown<R = boolean>(): R;
    _setPullsDown<R = void, P0 = boolean>(__setPullsDown: P0): R;
    setSupermenu<R = void, P0 = unknown>(_setSupermenu: P0): R;
    dealloc<R = void>(): R;
    _setTitle<R = void, P0 = unknown>(__setTitle: P0): R;
    itemMatrix<R = unknown>(): R;
    supermenu<R = unknown>(): R;
    menuClassName<R = unknown>(): R;
    _setMenuClassName<R = void, P0 = unknown>(__setMenuClassName: P0): R;
  }
  namespace classes {
    export interface NSMenuTemplate<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = NSMenuTemplate>(): R;
      new: <R = NSMenuTemplate>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSMenuTemplate: cocoa.classes.NSMenuTemplate;
