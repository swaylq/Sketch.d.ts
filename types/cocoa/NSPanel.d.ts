/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPanel<T = any> extends cocoa.NSWindow {
    _replaceAccessoryView_with_topView_bottomView_previousKeyView<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(__replaceAccessoryView: P0, _with: P1, _topView: P2, _bottomView: P3, _previousKeyView: P4): R;
    _doSetAccessoryView_topView_bottomView_oldView<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__doSetAccessoryView: P0, _topView: P1, _bottomView: P2, _oldView: P3): R;
    _doSetAccessoryView_topView_bottomView_previousKeyView_oldView<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(__doSetAccessoryView: P0, _topView: P1, _bottomView: P2, _previousKeyView: P3, _oldView: P4): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    _initContent_styleMask_backing_defer_counterpart<R = unknown, P0 = cocoa.CGRect, P1 = number, P2 = number, P3 = boolean, P4 = unknown>(__initContent: P0, _styleMask: P1, _backing: P2, _defer: P3, _counterpart: P4): R;
    worksWhenModal<R = boolean>(): R;
    setWorksWhenModal<R = void, P0 = boolean>(_v: P0): R;
    becomesKeyOnlyIfNeeded<R = boolean>(): R;
    setBecomesKeyOnlyIfNeeded<R = void, P0 = boolean>(_v: P0): R;
    floatingPanel<R = boolean>(): R;
    setFloatingPanel<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSPanel<T = any> extends cocoa.classes.NSWindow {
      alloc<R = NSPanel>(): R;
      new: <R = NSPanel>() => R;
    }
  }
}

declare const NSPanel: cocoa.classes.NSPanel;
