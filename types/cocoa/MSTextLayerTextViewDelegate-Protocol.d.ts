/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayerTextViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    documentColorSpaceForTextLayerTextView<R = NSColorSpace, P0 = MSTextLayerTextView>(_documentColorSpaceForTextLayerTextView: P0): R;
    canvasColorSpaceForTextLayerTextView<R = NSColorSpace, P0 = MSTextLayerTextView>(_canvasColorSpaceForTextLayerTextView: P0): R;
  }
  namespace MSTextLayerTextViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
