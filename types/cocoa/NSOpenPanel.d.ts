/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenPanel<T0 = void, T1 = void, T2 = void> extends NSSavePanel {
    _dismissModalForTerminate<R = void>(): R;
    preventsApplicationTerminationWhenModal<R = boolean>(): R;
    accessoryViewDisclosed<R = boolean>(): R;
    setAccessoryViewDisclosed<R = void, P0 = boolean>(_v: P0): R;
    canDownloadUbiquitousContents<R = boolean>(): R;
    setCanDownloadUbiquitousContents<R = void, P0 = boolean>(_v: P0): R;
    canResolveUbiquitousConflicts<R = boolean>(): R;
    setCanResolveUbiquitousConflicts<R = void, P0 = boolean>(_v: P0): R;
    canChooseFiles<R = boolean>(): R;
    setCanChooseFiles<R = void, P0 = boolean>(_v: P0): R;
    allowsMultipleSelection<R = boolean>(): R;
    setAllowsMultipleSelection<R = void, P0 = boolean>(_v: P0): R;
    canChooseDirectories<R = boolean>(): R;
    setCanChooseDirectories<R = void, P0 = boolean>(_v: P0): R;
    resolvesAliases<R = boolean>(): R;
    setResolvesAliases<R = void, P0 = boolean>(_v: P0): R;
    URLs<R = NSArray>(): R;
  }
  namespace NSOpenPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSavePanel {
      alloc<R = NSOpenPanel>(): R;
      new: <R = NSOpenPanel>() => R;
      openPanel<R = unknown>(): R;
    }
  }
}

declare const NSOpenPanel: cocoa.NSOpenPanel.CLASS;
