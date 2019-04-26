/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardBackgroundColorInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSColorInspectorDelegateProtocol, BCPopoverDelegateProtocol, MSStylePartPreviewButtonDelegateProtocol, MSStylePartPreviewButtonDisabledTargetProtocol {
    documentColorSpace<R = unknown>(): R;
    canvasColorSpace<R = unknown>(): R;
    changeBackgroundColorTo<R = void, P0 = unknown>(_changeBackgroundColorTo: P0): R;
    backgroundColorAction<R = void, P0 = unknown>(_backgroundColorAction: P0): R;
    colorCheckbox<R = NSButton>(): R;
    setColorCheckbox<R = void, P0 = NSButton>(_v: P0): R;
    colorAdaptor<R = MSInspectorValueAdaptor>(): R;
    setColorAdaptor<R = void, P0 = MSInspectorValueAdaptor>(_v: P0): R;
    popover<R = BCPopover>(): R;
    setPopover<R = void, P0 = BCPopover>(_v: P0): R;
    backgroundColorButton<R = MSStylePartPreviewButton>(): R;
    setBackgroundColorButton<R = void, P0 = MSStylePartPreviewButton>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSArtboardBackgroundColorInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSColorInspectorDelegateProtocol, BCPopoverDelegateProtocol, MSStylePartPreviewButtonDelegateProtocol, MSStylePartPreviewButtonDisabledTargetProtocol {
      alloc<R = MSArtboardBackgroundColorInspectorItem>(): R;
      new: <R = MSArtboardBackgroundColorInspectorItem>() => R;
    }
  }
}

declare const MSArtboardBackgroundColorInspectorItem: cocoa.MSArtboardBackgroundColorInspectorItem.CLASS;
