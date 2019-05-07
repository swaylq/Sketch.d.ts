/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowMenuUpdater<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
    setMenuToUpdate<R = void, P0 = unknown>(_setMenuToUpdate: P0): R;
    initWithMenuToUpdate<R = unknown, P0 = unknown>(_initWithMenuToUpdate: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSWindowMenuUpdater {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
      alloc<R = _NSWindowMenuUpdater>(): R;
      new: <R = _NSWindowMenuUpdater>() => R;
      attachUpdaterToMenu<R = void, P0 = unknown>(_attachUpdaterToMenu: P0): R;
    }
  }
}
