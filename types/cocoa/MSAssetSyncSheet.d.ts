/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncSheet<T0 = void, T1 = void, T2 = void> extends CHSheetController, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol, NSSplitViewDelegateProtocol {
    updateSelectedForSync<R = void, P0 = unknown>(_updateSelectedForSync: P0): R;
    updateSymbols<R = void, P0 = unknown>(_updateSymbols: P0): R;
    windowDidLoad<R = void>(): R;
    compareSyncSheetItem_toItem<R = number, P0 = unknown, P1 = unknown>(_compareSyncSheetItem: P0, _toItem: P1): R;
    buildTableViewData<R = void>(): R;
    hasSyncableItems<R = boolean>(): R;
    setHasSyncableItems<R = void, P0 = boolean>(_v: P0): R;
    splitView<R = NSSplitView>(): R;
    setSplitView<R = void, P0 = NSSplitView>(_v: P0): R;
    updatedSharedObjectView<R = MSSharedObjectView>(): R;
    setUpdatedSharedObjectView<R = void, P0 = MSSharedObjectView>(_v: P0): R;
    currentSharedObjectView<R = MSSharedObjectView>(): R;
    setCurrentSharedObjectView<R = void, P0 = MSSharedObjectView>(_v: P0): R;
    tableViewData<R = NSArray>(): R;
    document<R = MSDocument>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAssetSyncSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHSheetController, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol, NSSplitViewDelegateProtocol {
      alloc<R = MSAssetSyncSheet>(): R;
      new: <R = MSAssetSyncSheet>() => R;
    }
  }
}

declare const MSAssetSyncSheet: cocoa.MSAssetSyncSheet.CLASS;
