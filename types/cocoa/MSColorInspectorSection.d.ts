/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSection<T0 = void, T1 = void, T2 = void> extends NSViewController, MSPreviewColorSpaceProviderProtocol, MSAssetPickerControllerDelegateProtocol, MSAssetCollectionViewSourceDelegateProtocol, MSCollapsibleHeaderInspectorItemTargetProtocol, MSAssetPickerScrubberControllerDelegateProtocol, NSTouchBarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    makeTouchBarItemForIdentifier<R = unknown, P0 = unknown>(_makeTouchBarItemForIdentifier: P0): R;
    customTouchBarItemIdentifiers<R = unknown>(): R;
    globalAssetPickerDataSourceWithAssetType_name_title<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_globalAssetPickerDataSourceWithAssetType: P0, _name: P1, _title: P2): R;
    documentAssetPickerDataSourceWithAssetType_name_title<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_documentAssetPickerDataSourceWithAssetType: P0, _name: P1, _title: P2): R;
    controlDidSelectAsset<R = void, P0 = unknown>(_controlDidSelectAsset: P0): R;
    allAssetPickerDataSources<R = unknown>(): R;
    foreignAssetPickerDataSources<R = unknown>(): R;
    assetPickerDataSources<R = unknown>(): R;
    assetType<R = number>(): R;
    viewsWithColorPickerView_headerAccessories<R = unknown, P0 = unknown, P1 = unknown>(_viewsWithColorPickerView: P0, _headerAccessories: P1): R;
    refreshAction<R = void, P0 = unknown>(_refreshAction: P0): R;
    createPresetFromCurrentSelection<R = unknown>(): R;
    colorPickerChangedTo<R = void, P0 = unknown>(_colorPickerChangedTo: P0): R;
    popoverWillClose<R = void>(): R;
    validate<R = void>(): R;
    isEnabled<R = boolean>(): R;
    fillType<R = number>(): R;
    minimumHeight<R = number>(): R;
    scrollViewWithStackedViews<R = unknown, P0 = unknown>(_scrollViewWithStackedViews: P0): R;
    stackViewsInVerticalScrollView_frame<R = unknown, P0 = unknown, P1 = CGRect>(_stackViewsInVerticalScrollView: P0, _frame: P1): R;
    assetDataSourcesMighHaveChanged<R = void>(): R;
    didMoveThroughHistory<R = void, P0 = unknown>(_didMoveThroughHistory: P0): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    assetPickerScrubberController<R = MSAssetPickerScrubberController>(): R;
    setAssetPickerScrubberController<R = void, P0 = MSAssetPickerScrubberController>(_v: P0): R;
    noContentController<R = NSViewController>(): R;
    setNoContentController<R = void, P0 = NSViewController>(_v: P0): R;
    assetPickerController<R = MSAssetPickerController>(): R;
    setAssetPickerController<R = void, P0 = MSAssetPickerController>(_v: P0): R;
    assetPickerHeaderItem<R = MSCollapsibleHeaderInspectorItem>(): R;
    setAssetPickerHeaderItem<R = void, P0 = MSCollapsibleHeaderInspectorItem>(_v: P0): R;
    styleParts<R = NSArray>(): R;
    setStyleParts<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = MSColorInspectorSectionDelegate>(): R;
    setDelegate<R = void, P0 = MSColorInspectorSectionDelegate>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSPreviewColorSpaceProviderProtocol, MSAssetPickerControllerDelegateProtocol, MSAssetCollectionViewSourceDelegateProtocol, MSCollapsibleHeaderInspectorItemTargetProtocol, MSAssetPickerScrubberControllerDelegateProtocol, NSTouchBarDelegateProtocol {
      alloc<R = MSColorInspectorSection>(): R;
      new: <R = MSColorInspectorSection>() => R;
      refreshColorPickerViewHeight<R = void, P0 = unknown>(_refreshColorPickerViewHeight: P0): R;
      drawCheckerboardBackgroundInRect_size_foreColor_backgroundColor<R = void, P0 = CGRect, P1 = number, P2 = CGColor, P3 = CGColor>(_drawCheckerboardBackgroundInRect: P0, _size: P1, _foreColor: P2, _backgroundColor: P3): R;
      presetPickerVisibilityDefaultsKey<R = unknown>(): R;
    }
  }
}

declare const MSColorInspectorSection: cocoa.MSColorInspectorSection.CLASS;
