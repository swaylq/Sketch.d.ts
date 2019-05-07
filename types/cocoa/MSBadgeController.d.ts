/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBadgeController<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    refresh<R = void>(): R;
    updateBadge_forAction<R = unknown, P0 = unknown, P1 = unknown>(_updateBadge: P0, _forAction: P1): R;
    activeBadgingActionsForController<R = unknown, P0 = unknown>(_activeBadgingActionsForController: P0): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    activeActions<R = NSArray>(): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
    activeWindowBadgingActions<R = NSArray>(): R;
    documentWindow<R = MSDocumentWindow>(): R;
  }
  namespace MSBadgeController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBadgeController>(): R;
      new: <R = MSBadgeController>() => R;
    }
  }
}

declare const MSBadgeController: cocoa.MSBadgeController.CLASS;
