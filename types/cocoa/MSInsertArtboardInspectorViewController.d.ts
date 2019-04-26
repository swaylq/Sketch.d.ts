/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertArtboardInspectorViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, MSArtboardPresetsViewControllerDelegateProtocol, MSEditArtboardPresetViewControllerDelegateProtocol, MSInspectorChildControllerProtocol {
    cxx_destruct<R = void>(): R;
    views<R = unknown>(): R;
    focusCanvasOnAllArtboards<R = void>(): R;
    presetsViewController<R = unknown>(): R;
    presetsContainerView<R = NSView>(): R;
    setPresetsContainerView<R = void, P0 = NSView>(_v: P0): R;
    eventHandler<R = MSInsertArtboardEventHandler>(): R;
    setEventHandler<R = void, P0 = MSInsertArtboardEventHandler>(_v: P0): R;
    proposedArtboardSize<R = CGSize>(): R;
    setProposedArtboardSize<R = void, P0 = CGSize>(_v: P0): R;
    shouldAddInsertFromSelectionItem<R = boolean>(): R;
    setShouldAddInsertFromSelectionItem<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSInsertArtboardInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSArtboardPresetsViewControllerDelegateProtocol, MSEditArtboardPresetViewControllerDelegateProtocol, MSInspectorChildControllerProtocol {
      alloc<R = MSInsertArtboardInspectorViewController>(): R;
      new: <R = MSInsertArtboardInspectorViewController>() => R;
    }
  }
}

declare const MSInsertArtboardInspectorViewController: cocoa.MSInsertArtboardInspectorViewController.CLASS;
