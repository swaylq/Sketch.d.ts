/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerScrubberController<T0 = void, T1 = void, T2 = void> extends NSObject, NSScrubberDelegateProtocol, NSScrubberDataSourceProtocol {
    cxx_destruct<R = void>(): R;
    scrubber_layout_sizeForItemAtIndex<R = CGSize, P0 = unknown, P1 = unknown, P2 = number>(_scrubber: P0, _layout: P1, _sizeForItemAtIndex: P2): R;
    fittingAssetScrubberLabelItemSizeForTitle<R = CGSize, P0 = unknown>(_fittingAssetScrubberLabelItemSizeForTitle: P0): R;
    scrubberItemViewWrapping<R = unknown, P0 = unknown>(_scrubberItemViewWrapping: P0): R;
    colorAssetCollectionLabelWithTitle<R = unknown, P0 = unknown>(_colorAssetCollectionLabelWithTitle: P0): R;
    scrubberItemViewForAssetAtIndex<R = unknown, P0 = number>(_scrubberItemViewForAssetAtIndex: P0): R;
    reloadData<R = void>(): R;
    initWithIdentifier<R = unknown, P0 = unknown>(_initWithIdentifier: P0): R;
    scrubber<R = NSScrubber>(): R;
    setScrubber<R = void, P0 = NSScrubber>(_v: P0): R;
    item<R = NSTouchBarItem>(): R;
    setItem<R = void, P0 = NSTouchBarItem>(_v: P0): R;
    delegate<R = MSAssetPickerScrubberControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSAssetPickerScrubberControllerDelegate>(_v: P0): R;
    dataSource<R = MSAssetCollectionViewDataSource>(): R;
    setDataSource<R = void, P0 = MSAssetCollectionViewDataSource>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAssetPickerScrubberController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSScrubberDelegateProtocol, NSScrubberDataSourceProtocol {
      alloc<R = MSAssetPickerScrubberController>(): R;
      new: <R = MSAssetPickerScrubberController>() => R;
    }
  }
}

declare const MSAssetPickerScrubberController: cocoa.MSAssetPickerScrubberController.CLASS;
