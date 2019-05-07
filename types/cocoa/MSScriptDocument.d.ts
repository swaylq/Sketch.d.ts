/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSScriptDocument<T0 = void, T1 = void, T2 = void> extends NSDocument {
    showBundleIncompatibleAlert<R = boolean, P0 = unknown>(_showBundleIncompatibleAlert: P0): R;
    showBundleAlreadyInstalledAlert_isIncompatible_existingPlugin<R = boolean, P0 = unknown, P1 = boolean, P2 = unknown>(_showBundleAlreadyInstalledAlert: P0, _isIncompatible: P1, _existingPlugin: P2): R;
    showBundleUpgradeAlert_isIncompatible_existingPlugin<R = boolean, P0 = unknown, P1 = boolean, P2 = unknown>(_showBundleUpgradeAlert: P0, _isIncompatible: P1, _existingPlugin: P2): R;
    titleFromPlugin<R = unknown, P0 = unknown>(_titleFromPlugin: P0): R;
    copyPluginBundle_toPluginsFolderURL<R = boolean, P0 = unknown, P1 = unknown>(_copyPluginBundle: P0, _toPluginsFolderURL: P1): R;
    removeExistingPlugin<R = void, P0 = unknown>(_removeExistingPlugin: P0): R;
  }
  namespace MSScriptDocument {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDocument {
      alloc<R = MSScriptDocument>(): R;
      new: <R = MSScriptDocument>() => R;
    }
  }
}

declare const MSScriptDocument: cocoa.MSScriptDocument.CLASS;
