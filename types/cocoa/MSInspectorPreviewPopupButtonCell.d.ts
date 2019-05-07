/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPreviewPopupButtonCell<T0 = void, T1 = void, T2 = void> extends MSInspectorPopUpButtonCell {
    cxx_destruct<R = void>(): R;
    previewImage<R = NSImage>(): R;
    setPreviewImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace MSInspectorPreviewPopupButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorPopUpButtonCell {
      alloc<R = MSInspectorPreviewPopupButtonCell>(): R;
      new: <R = MSInspectorPreviewPopupButtonCell>() => R;
    }
  }
}

declare const MSInspectorPreviewPopupButtonCell: cocoa.MSInspectorPreviewPopupButtonCell.CLASS;
