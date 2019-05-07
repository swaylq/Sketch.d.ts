/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStatusItemReplicant<T0 = void, T1 = void, T2 = void> extends NSStatusItem {
    setDrawBlock<R = void, P0 = CDUnknownBlockType>(_setDrawBlock: P0): R;
    replicantView<R = unknown>(): R;
    isVisible<R = boolean>(): R;
    _initInStatusBar_withLength_withPriority_visible_displayID_parent<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = boolean, P4 = unknown, P5 = unknown>(__initInStatusBar: P0, _withLength: P1, _withPriority: P2, _visible: P3, _displayID: P4, _parent: P5): R;
    parentItem<R = NSStatusItem>(): R;
    setParentItem<R = void, P0 = NSStatusItem>(_v: P0): R;
  }
  namespace NSStatusItemReplicant {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStatusItem {
      alloc<R = NSStatusItemReplicant>(): R;
      new: <R = NSStatusItemReplicant>() => R;
    }
  }
}

declare const NSStatusItemReplicant: cocoa.NSStatusItemReplicant.CLASS;
