/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarSnapshotWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    isKeyWindow<R = boolean>(): R;
    hasMainAppearance<R = boolean>(): R;
    _hasActiveAppearanceIgnoringKeyFocus<R = boolean>(): R;
    _hasActiveAppearance<R = boolean>(): R;
    hasKeyAppearance<R = boolean>(): R;
    _hasActiveControls<R = boolean>(): R;
    active<R = boolean>(): R;
    setActive<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSToolbarSnapshotWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSToolbarSnapshotWindow>(): R;
      new: <R = NSToolbarSnapshotWindow>() => R;
    }
  }
}

declare const NSToolbarSnapshotWindow: cocoa.NSToolbarSnapshotWindow.CLASS;
