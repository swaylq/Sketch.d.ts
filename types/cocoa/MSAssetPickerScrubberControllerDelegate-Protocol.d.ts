/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerScrubberControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSPreviewColorSpaceProviderProtocol {
    assetPickerScrubberController_didSelectAsset<R = void, P0 = MSAssetPickerScrubberController, P1 = MSAsset>(_assetPickerScrubberController: P0, _didSelectAsset: P1): R;
  }
  namespace MSAssetPickerScrubberControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreviewColorSpaceProviderProtocol {}
  }
}
