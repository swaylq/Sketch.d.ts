/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOVTrackingAreaOwner<T0 = void, T1 = void, T2 = void> extends NSObject {
    mouseExited<R = void, P0 = unknown>(_mouseExited: P0): R;
    mouseEntered<R = void, P0 = unknown>(_mouseEntered: P0): R;
    owner<R = NSOutlineView>(): R;
    setOwner<R = void, P0 = NSOutlineView>(_v: P0): R;
  }
  namespace NSOVTrackingAreaOwner {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSOVTrackingAreaOwner>(): R;
      new: <R = NSOVTrackingAreaOwner>() => R;
    }
  }
}

declare const NSOVTrackingAreaOwner: cocoa.NSOVTrackingAreaOwner.CLASS;
