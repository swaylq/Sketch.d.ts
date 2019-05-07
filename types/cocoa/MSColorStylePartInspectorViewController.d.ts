/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorStylePartInspectorViewController<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorViewController, NSPopoverDelegateProtocol, MSStylePartPreviewButtonDisabledTargetProtocol, MSColorInspectorDelegateProtocol, MSStylePartPreviewButtonDelegateProtocol {
    setBlendMode_forPreviewButton<R = void, P0 = number, P1 = unknown>(_setBlendMode: P0, _forPreviewButton: P1): R;
    refreshAction<R = void, P0 = unknown>(_refreshAction: P0): R;
    updateBlendMode<R = void>(): R;
    updateColorInActiveInspector<R = void>(): R;
    checkBoxAction<R = void, P0 = unknown>(_checkBoxAction: P0): R;
    previewCellAction<R = void, P0 = unknown>(_previewCellAction: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    stylePartAdaptor<R = MSInspectorValueAdaptor>(): R;
    setStylePartAdaptor<R = void, P0 = MSInspectorValueAdaptor>(_v: P0): R;
    colorInspector<R = MSColorInspector>(): R;
    setColorInspector<R = void, P0 = MSColorInspector>(_v: P0): R;
    popover<R = BCPopover>(): R;
    setPopover<R = void, P0 = BCPopover>(_v: P0): R;
    colorButton<R = MSStylePartPreviewButton>(): R;
    setColorButton<R = void, P0 = MSStylePartPreviewButton>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorStylePartInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePartInspectorViewController, NSPopoverDelegateProtocol, MSStylePartPreviewButtonDisabledTargetProtocol, MSColorInspectorDelegateProtocol, MSStylePartPreviewButtonDelegateProtocol {
      alloc<R = MSColorStylePartInspectorViewController>(): R;
      new: <R = MSColorStylePartInspectorViewController>() => R;
      fillTypeStringForFillType<R = unknown, P0 = number>(_fillTypeStringForFillType: P0): R;
    }
  }
}

declare const MSColorStylePartInspectorViewController: cocoa.MSColorStylePartInspectorViewController.CLASS;
