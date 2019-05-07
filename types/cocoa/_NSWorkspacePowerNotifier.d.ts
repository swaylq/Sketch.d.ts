/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWorkspacePowerNotifier<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    invalidate<R = void>(): R;
    initWithWorkspaceNotificationCenter<R = unknown, P0 = unknown>(_initWithWorkspaceNotificationCenter: P0): R;
  }
  namespace _NSWorkspacePowerNotifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSWorkspacePowerNotifier>(): R;
      new: <R = _NSWorkspacePowerNotifier>() => R;
    }
  }
}
