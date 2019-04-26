/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FIFinderViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    finderView_hideExtension<R = void, P0 = FIFinderView, P1 = boolean>(_finderView: P0, _hideExtension: P1): R;
    finderViewCollapseSavePanel<R = void, P0 = FIFinderView>(_finderViewCollapseSavePanel: P0): R;
    finderViewQuerySearchUTIs<R = NSSet, P0 = FIFinderView>(_finderViewQuerySearchUTIs: P0): R;
    finderView_acceptsPreviewPanelControl<R = boolean, P0 = FIFinderView, P1 = QLPreviewPanel>(_finderView: P0, _acceptsPreviewPanelControl: P1): R;
    finderView_configureForGotoWithFilename<R = void, P0 = FIFinderView, P1 = NSString>(_finderView: P0, _configureForGotoWithFilename: P1): R;
    finderView_scopeChanged<R = void, P0 = FIFinderView, P1 = boolean>(_finderView: P0, _scopeChanged: P1): R;
    finderViewViewStyleChanged<R = void, P0 = FIFinderView>(_finderViewViewStyleChanged: P0): R;
    finderViewRequestRecentPlaces<R = NSArray, P0 = FIFinderView>(_finderViewRequestRecentPlaces: P0): R;
    finderView_clickedOnDisabledURL<R = void, P0 = FIFinderView, P1 = NSURL>(_finderView: P0, _clickedOnDisabledURL: P1): R;
    finderView_populationInProgress<R = void, P0 = FIFinderView, P1 = boolean>(_finderView: P0, _populationInProgress: P1): R;
    finderViewOpenSelection<R = boolean, P0 = FIFinderView>(_finderViewOpenSelection: P0): R;
    finderViewSelectionDidChange<R = void, P0 = FIFinderView>(_finderViewSelectionDidChange: P0): R;
    finderView_didChangeToDirectoryURL<R = void, P0 = FIFinderView, P1 = NSURL>(_finderView: P0, _didChangeToDirectoryURL: P1): R;
    finderView_showAsPackageForURL<R = boolean, P0 = FIFinderView, P1 = NSURL>(_finderView: P0, _showAsPackageForURL: P1): R;
    finderView_canSelectURL_itemIsContainer_itemIsPackage<R = boolean, P0 = FIFinderView, P1 = NSURL, P2 = boolean, P3 = boolean>(_finderView: P0, _canSelectURL: P1, _itemIsContainer: P2, _itemIsPackage: P3): R;
    finderView_canSelectURL<R = boolean, P0 = FIFinderView, P1 = NSURL>(_finderView: P0, _canSelectURL: P1): R;
    finderView_shouldEnableURL<R = boolean, P0 = FIFinderView, P1 = NSURL>(_finderView: P0, _shouldEnableURL: P1): R;
    finderView_shouldEnableURL_itemIsContainer_itemIsPackage<R = boolean, P0 = FIFinderView, P1 = NSURL, P2 = boolean, P3 = boolean>(_finderView: P0, _shouldEnableURL: P1, _itemIsContainer: P2, _itemIsPackage: P3): R;
    finderView_shouldEnableURL_itemIsContainer_itemIsPackage_pathExtension_itemHFSType_typeIdentifier<R = boolean, P0 = FIFinderView, P1 = NSURL, P2 = boolean, P3 = boolean, P4 = NSString, P5 = number, P6 = NSString>(_finderView: P0, _shouldEnableURL: P1, _itemIsContainer: P2, _itemIsPackage: P3, _pathExtension: P4, _itemHFSType: P5, _typeIdentifier: P6): R;
    finderView_shouldEnableItems_completionHandler<R = void, P0 = FIFinderView, P1 = NSArray, P2 = CDUnknownBlockType>(_finderView: P0, _shouldEnableItems: P1, _completionHandler: P2): R;
  }
  namespace FIFinderViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
