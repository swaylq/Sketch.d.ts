/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCoreDragManager<T0 = void, T1 = void, T2 = void> extends _NSDragManager {
    _alternateDragSource<R = unknown>(): R;
    _setAlternateDragSource<R = void, P0 = unknown>(__setAlternateDragSource: P0): R;
    _dragUntilMouseUp_accepted<R = void, P0 = unknown, P1 = string>(__dragUntilMouseUp: P0, _accepted: P1): R;
  }
  namespace NSCoreDragManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSDragManager {
      alloc<R = NSCoreDragManager>(): R;
      new: <R = NSCoreDragManager>() => R;
      doCommandBySelector<R = void, P0 = string>(_doCommandBySelector: P0): R;
      insertText<R = void, P0 = unknown>(_insertText: P0): R;
    }
  }
}

declare const NSCoreDragManager: cocoa.NSCoreDragManager.CLASS;
