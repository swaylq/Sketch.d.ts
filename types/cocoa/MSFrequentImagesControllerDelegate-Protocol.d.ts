/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFrequentImagesControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSFrequentObjectsControllerDelegateProtocol {
    frequentImagesController_didChooseImage<R = void, P0 = MSFrequentImagesController, P1 = MSImageData>(_frequentImagesController: P0, _didChooseImage: P1): R;
  }
  namespace MSFrequentImagesControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFrequentObjectsControllerDelegateProtocol {}
  }
}
