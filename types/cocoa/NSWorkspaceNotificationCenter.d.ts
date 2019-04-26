/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWorkspaceNotificationCenter<T0 = void, T1 = void, T2 = void> extends NSNotificationCenter {
    _menuBarDidChangeAppearance<R = void, P0 = unknown>(__menuBarDidChangeAppearance: P0): R;
    _switchControlStatusDidChange<R = void, P0 = unknown>(__switchControlStatusDidChange: P0): R;
    _voiceOverStatusDidChange<R = void, P0 = unknown>(__voiceOverStatusDidChange: P0): R;
    _accessibilityDisplaySettingsDidChange<R = void, P0 = unknown>(__accessibilityDisplaySettingsDidChange: P0): R;
    _workspaceDidResignActive<R = void, P0 = unknown>(__workspaceDidResignActive: P0): R;
    _workspaceDidBecomeActive<R = void, P0 = unknown>(__workspaceDidBecomeActive: P0): R;
    _workspaceDidResignOrBecomeActive<R = void, P0 = unknown>(__workspaceDidResignOrBecomeActive: P0): R;
    connectionID<R = number>(): R;
    _checkForObserversOfSubsystem<R = boolean, P0 = number>(__checkForObserversOfSubsystem: P0): R;
    _addOrRemoveObserver_forName_isAdding<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(__addOrRemoveObserver: P0, _forName: P1, _isAdding: P2): R;
    _addOrRemoveObserverForAllNotifications_isAdding<R = void, P0 = unknown, P1 = boolean>(__addOrRemoveObserverForAllNotifications: P0, _isAdding: P1): R;
    hasObserversForNotificationName<R = boolean, P0 = unknown>(_hasObserversForNotificationName: P0): R;
    _destroyAllUnobservedSubsystems<R = void>(): R;
    _destroySubsystemIfUnobserved<R = boolean, P0 = number>(__destroySubsystemIfUnobserved: P0): R;
    _createSubsystemIfNecessary<R = void, P0 = number>(__createSubsystemIfNecessary: P0): R;
    workspace<R = unknown>(): R;
    initWithWorkspace<R = unknown, P0 = unknown>(_initWithWorkspace: P0): R;
  }
  namespace NSWorkspaceNotificationCenter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNotificationCenter {
      alloc<R = NSWorkspaceNotificationCenter>(): R;
      new: <R = NSWorkspaceNotificationCenter>() => R;
    }
  }
}

declare const NSWorkspaceNotificationCenter: cocoa.NSWorkspaceNotificationCenter.CLASS;
