/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVBOpenPanel<T0 = void, T1 = void, T2 = void> extends NSVBSavePanel {
    isMovable<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    preventsApplicationTerminationWhenModal<R = boolean>(): R;
    beginForDirectory_file_types_modelessDelegate_didEndSelector_contextInfo<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = string, P5 = void>(_beginForDirectory: P0, _file: P1, _types: P2, _modelessDelegate: P3, _didEndSelector: P4, _contextInfo: P5): R;
    setCanDownloadUbiquitousContents<R = void, P0 = boolean>(_setCanDownloadUbiquitousContents: P0): R;
    canDownloadUbiquitousContents<R = boolean>(): R;
    setCanResolveUbiquitousConflicts<R = void, P0 = boolean>(_setCanResolveUbiquitousConflicts: P0): R;
    canResolveUbiquitousConflicts<R = boolean>(): R;
    setCanChooseFiles<R = void, P0 = boolean>(_setCanChooseFiles: P0): R;
    canChooseFiles<R = boolean>(): R;
    setAllowsMultipleSelection<R = void, P0 = boolean>(_setAllowsMultipleSelection: P0): R;
    allowsMultipleSelection<R = boolean>(): R;
    setCanChooseDirectories<R = void, P0 = boolean>(_setCanChooseDirectories: P0): R;
    canChooseDirectories<R = boolean>(): R;
    setResolvesAliases<R = void, P0 = boolean>(_setResolvesAliases: P0): R;
    resolvesAliases<R = boolean>(): R;
    URLs<R = unknown>(): R;
    filenames<R = unknown>(): R;
    _isTitleHidden<R = boolean>(): R;
    frameRectForContentRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_frameRectForContentRect: P0, _styleMask: P1): R;
    _canAddUnderTitlebarViews<R = boolean>(): R;
    contentRectForFrameRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_contentRectForFrameRect: P0, _styleMask: P1): R;
    startRectForSheet<R = CGRect, P0 = unknown>(_startRectForSheet: P0): R;
    styleMaskForHostWindow<R = number>(): R;
    commonPrep_runningAsASheet_hostWindow_runningAsASheet<R = void, P0 = CDUnknownBlockType, P1 = boolean, P2 = boolean>(_commonPrep: P0, _runningAsASheet: P1, _hostWindow_runningAsASheet: P2): R;
    _setDefaultBridgeValues<R = void>(): R;
    configureContentView<R = void, P0 = unknown>(_configureContentView: P0): R;
  }
  namespace NSVBOpenPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSVBSavePanel {
      alloc<R = NSVBOpenPanel>(): R;
      new: <R = NSVBOpenPanel>() => R;
      openPanel<R = unknown>(): R;
    }
  }
}

declare const NSVBOpenPanel: cocoa.NSVBOpenPanel.CLASS;
