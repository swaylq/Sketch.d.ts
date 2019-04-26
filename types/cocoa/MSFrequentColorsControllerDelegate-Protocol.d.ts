/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFrequentColorsControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSFrequentObjectsControllerDelegateProtocol, MSPreviewColorSpaceProviderProtocol {
    frequentColorsController_didChooseColor<R = void, P0 = MSFrequentColorsController, P1 = MSColor>(_frequentColorsController: P0, _didChooseColor: P1): R;
  }
  namespace MSFrequentColorsControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFrequentObjectsControllerDelegateProtocol, MSPreviewColorSpaceProviderProtocol {}
  }
}
