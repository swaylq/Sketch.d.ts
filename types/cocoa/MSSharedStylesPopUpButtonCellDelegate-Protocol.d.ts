/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStylesPopUpButtonCellDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    cachedImageForPopupButtonCell_withSharedObject<R = NSImage, P0 = MSSharedStylesPopUpButtonCell, P1 = MSShareableObjectReference>(_cachedImageForPopupButtonCell: P0, _withSharedObject: P1): R;
    popupButtonCell_didCreatePreviewImage_forSharedObject<R = void, P0 = MSSharedStylesPopUpButtonCell, P1 = NSImage, P2 = MSShareableObjectReference>(_popupButtonCell: P0, _didCreatePreviewImage: P1, _forSharedObject: P2): R;
  }
  namespace MSSharedStylesPopUpButtonCellDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
