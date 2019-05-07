/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSegmentedToolbarItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItemGroup {
    validateWithAction<R = void, P0 = unknown>(_validateWithAction: P0): R;
    makeViewForAction<R = unknown, P0 = unknown>(_makeViewForAction: P0): R;
    initWithAction_forToolbar<R = unknown, P0 = unknown, P1 = boolean>(_initWithAction: P0, _forToolbar: P1): R;
  }
  namespace MSSegmentedToolbarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItemGroup {
      alloc<R = MSSegmentedToolbarItem>(): R;
      new: <R = MSSegmentedToolbarItem>() => R;
    }
  }
}

declare const MSSegmentedToolbarItem: cocoa.MSSegmentedToolbarItem.CLASS;
