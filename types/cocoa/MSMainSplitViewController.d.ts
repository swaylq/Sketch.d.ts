/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMainSplitViewController<T0 = void, T1 = void, T2 = void> extends NSObject, NSSplitViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    didExitVersionBrowser<R = void>(): R;
    didEnterVersionBrowser<R = void>(): R;
    dividerIndexBelongsToInspectorView<R = boolean, P0 = number>(_dividerIndexBelongsToInspectorView: P0): R;
    awakeFromNib<R = void>(): R;
    savedInspectorView<R = NSView>(): R;
    setSavedInspectorView<R = void, P0 = NSView>(_v: P0): R;
    isInVersionBrowser<R = boolean>(): R;
    setIsInVersionBrowser<R = void, P0 = boolean>(_v: P0): R;
    rightSide<R = number>(): R;
    setRightSide<R = void, P0 = number>(_v: P0): R;
    leftSide<R = number>(): R;
    setLeftSide<R = void, P0 = number>(_v: P0): R;
    window<R = NSWindow>(): R;
    setWindow<R = void, P0 = NSWindow>(_v: P0): R;
    splitView<R = NSSplitView>(): R;
    setSplitView<R = void, P0 = NSSplitView>(_v: P0): R;
    inspectorView<R = NSView>(): R;
    setInspectorView<R = void, P0 = NSView>(_v: P0): R;
    canvasView<R = NSView>(): R;
    setCanvasView<R = void, P0 = NSView>(_v: P0): R;
    layerListView<R = NSView>(): R;
    setLayerListView<R = void, P0 = NSView>(_v: P0): R;
    layerListWidth<R = number>(): R;
    setLayerListWidth<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSMainSplitViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSplitViewDelegateProtocol {
      alloc<R = MSMainSplitViewController>(): R;
      new: <R = MSMainSplitViewController>() => R;
    }
  }
}

declare const MSMainSplitViewController: cocoa.MSMainSplitViewController.CLASS;
