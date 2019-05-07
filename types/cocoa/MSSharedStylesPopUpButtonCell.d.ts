/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStylesPopUpButtonCell<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
    cxx_destruct<R = void>(): R;
    drawDefaultTitle_withFrame_inView<R = CGRect, P0 = unknown, P1 = CGRect, P2 = unknown>(_drawDefaultTitle: P0, _withFrame: P1, _inView: P2): R;
    drawSharedObjectTitleWithFrame<R = CGRect, P0 = CGRect>(_drawSharedObjectTitleWithFrame: P0): R;
    drawSharedObjectSecondaryTitle<R = CGRect, P0 = CGRect>(_drawSharedObjectSecondaryTitle: P0): R;
    drawSharedObjectMainTitle<R = CGRect, P0 = CGRect>(_drawSharedObjectMainTitle: P0): R;
    previewImage<R = NSImage>(): R;
    setPreviewImage<R = void, P0 = NSImage>(_v: P0): R;
    localIsOutOfSync<R = boolean>(): R;
    setLocalIsOutOfSync<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = MSSharedStylesPopUpButtonCellDelegate>(): R;
    setDelegate<R = void, P0 = MSSharedStylesPopUpButtonCellDelegate>(_v: P0): R;
    sharedObject<R = MSShareableObjectReference>(): R;
  }
  namespace MSSharedStylesPopUpButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
      alloc<R = MSSharedStylesPopUpButtonCell>(): R;
      new: <R = MSSharedStylesPopUpButtonCell>() => R;
    }
  }
}

declare const MSSharedStylesPopUpButtonCell: cocoa.MSSharedStylesPopUpButtonCell.CLASS;
