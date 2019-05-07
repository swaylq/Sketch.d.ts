/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerController<T0 = void, T1 = void, T2 = void> extends NSViewController, MSAssetCollectionViewSourceItemProviderProtocol, MSAssetCollectionViewItemDelegateProtocol, MSAssetPickerCollectionViewDelegateProtocol, NSCollectionViewDelegateProtocol, NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    scrollPathToVisible<R = void, P0 = unknown>(_scrollPathToVisible: P0): R;
    scrollPathToVisibleAndStartEditing<R = void, P0 = unknown>(_scrollPathToVisibleAndStartEditing: P0): R;
    switchAssetCollection<R = void, P0 = unknown>(_switchAssetCollection: P0): R;
    switchDisplayMode<R = void, P0 = unknown>(_switchDisplayMode: P0): R;
    addAsset<R = void, P0 = unknown>(_addAsset: P0): R;
    setEffectiveDisplayMode_animated_completionHandler<R = void, P0 = number, P1 = boolean, P2 = CDUnknownBlockType>(_setEffectiveDisplayMode: P0, _animated: P1, _completionHandler: P2): R;
    switchToDataSourceAtIndex<R = void, P0 = number>(_switchToDataSourceAtIndex: P0): R;
    doDeleteAssetAtIndexPath_fromDataSource_collectionView_animated<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_doDeleteAssetAtIndexPath: P0, _fromDataSource: P1, _collectionView: P2, _animated: P3): R;
    doAddAsset_toDataSource_forCollectionView<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_doAddAsset: P0, _toDataSource: P1, _forCollectionView: P2): R;
    commitNameEditingIfNecessary<R = void>(): R;
    adjustHeight<R = void>(): R;
    updateLayoutParameters<R = void>(): R;
    updateHighlightedAssets<R = void>(): R;
    reloadDataAndUpdateSize<R = void>(): R;
    updateAssetDisplayModeButton<R = void>(): R;
    updateSwitchButton<R = void>(): R;
    disconnectCollectionViewFromDataSource<R = void, P0 = unknown>(_disconnectCollectionViewFromDataSource: P0): R;
    connectCollectionViewWithDataSource<R = void, P0 = unknown>(_connectCollectionViewWithDataSource: P0): R;
    prepareUI<R = void>(): R;
    requestUpdatedIndexesForCurrentDataSource<R = void>(): R;
    effectiveDisplayMode<R = number>(): R;
    setEffectiveDisplayMode<R = void, P0 = number>(_v: P0): R;
    currentDropTargetPath<R = NSIndexPath>(): R;
    setCurrentDropTargetPath<R = void, P0 = NSIndexPath>(_v: P0): R;
    draggingSourceIndexPath<R = NSIndexPath>(): R;
    setDraggingSourceIndexPath<R = void, P0 = NSIndexPath>(_v: P0): R;
    draggedItem<R = NSCollectionViewItem>(): R;
    setDraggedItem<R = void, P0 = NSCollectionViewItem>(_v: P0): R;
    switchCollectionButtonController<R = MSGenericButtonController>(): R;
    setSwitchCollectionButtonController<R = void, P0 = MSGenericButtonController>(_v: P0): R;
    assetDisplayModeButton<R = MSGenericButtonController>(): R;
    setAssetDisplayModeButton<R = void, P0 = MSGenericButtonController>(_v: P0): R;
    addButtonController<R = MSGenericButtonController>(): R;
    setAddButtonController<R = void, P0 = MSGenericButtonController>(_v: P0): R;
    flowLayout<R = MSAssetCollectionLayout>(): R;
    setFlowLayout<R = void, P0 = MSAssetCollectionLayout>(_v: P0): R;
    collectionView<R = NSCollectionView>(): R;
    setCollectionView<R = void, P0 = NSCollectionView>(_v: P0): R;
    highlightedAsset<R = MSAsset>(): R;
    setHighlightedAsset<R = void, P0 = MSAsset>(_v: P0): R;
    currentDataSource<R = MSAssetCollectionViewDataSource>(): R;
    setCurrentDataSource<R = void, P0 = MSAssetCollectionViewDataSource>(_v: P0): R;
    dataSources<R = NSArray>(): R;
    setDataSources<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = MSAssetPickerControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSAssetPickerControllerDelegate>(_v: P0): R;
    sectionHeaderLabelView<R = NSView>(): R;
    sectionHeaderAccessoryViews<R = NSArray>(): R;
    hasContent<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAssetPickerController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSAssetCollectionViewSourceItemProviderProtocol, MSAssetCollectionViewItemDelegateProtocol, MSAssetPickerCollectionViewDelegateProtocol, NSCollectionViewDelegateProtocol, NSMenuDelegateProtocol {
      alloc<R = MSAssetPickerController>(): R;
      new: <R = MSAssetPickerController>() => R;
      itemNibNameForAssetType<R = unknown, P0 = number>(_itemNibNameForAssetType: P0): R;
    }
  }
}

declare const MSAssetPickerController: cocoa.MSAssetPickerController.CLASS;
