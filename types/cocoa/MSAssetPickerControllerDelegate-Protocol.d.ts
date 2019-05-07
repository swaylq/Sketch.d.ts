/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSPreviewColorSpaceProviderProtocol {
    adjustFirstResponder<R = void, P0 = MSAssetPickerController>(_adjustFirstResponder: P0): R;
    assetPickerController_didSelectDataSource<R = void, P0 = MSAssetPickerController, P1 = MSAssetCollectionViewDataSource>(_assetPickerController: P0, _didSelectDataSource: P1): R;
    layoutChangedForAssetPickerCollection<R = void, P0 = MSAssetPickerController>(_layoutChangedForAssetPickerCollection: P0): R;
    createNewAssetForAssetPickerController<R = MSAsset, P0 = MSAssetPickerController>(_createNewAssetForAssetPickerController: P0): R;
    assetPickerController_didSelectAsset<R = void, P0 = MSAssetPickerController, P1 = MSAsset>(_assetPickerController: P0, _didSelectAsset: P1): R;
    assetPickerController_shouldChangeToDisplayMode<R = boolean, P0 = MSAssetPickerController, P1 = number>(_assetPickerController: P0, _shouldChangeToDisplayMode: P1): R;
    allowAlternativeDisplayModesForAssetPickerController<R = boolean, P0 = MSAssetPickerController>(_allowAlternativeDisplayModesForAssetPickerController: P0): R;
  }
  namespace MSAssetPickerControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreviewColorSpaceProviderProtocol {}
  }
}
