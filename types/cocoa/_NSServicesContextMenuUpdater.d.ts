/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServicesContextMenuUpdater<T0 = void, T1 = void, T2 = void> extends _NSServicesMenuUpdater {
    dispose<R = void>(): R;
    initWithMenuRef_correspondingToMenu_withRequestorChain<R = unknown, P0 = OpaqueMenuRef, P1 = unknown, P2 = unknown>(_initWithMenuRef: P0, _correspondingToMenu: P1, _withRequestorChain: P2): R;
  }
  namespace _NSServicesContextMenuUpdater {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSServicesMenuUpdater {
      alloc<R = _NSServicesContextMenuUpdater>(): R;
      new: <R = _NSServicesContextMenuUpdater>() => R;
    }
  }
}
