/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerListController<T0 = void, T1 = void, T2 = void> extends MSSidebarListController, BCOutlineViewDataControllerDataSourceProtocol, BCOutlineViewDataControllerDelegateProtocol {
    pasteboardWriterClass<R = unknown>(): R;
    mapExpandedStateToLayerListStatus<R = number, P0 = number>(_mapExpandedStateToLayerListStatus: P0): R;
    itemForNode<R = unknown, P0 = unknown>(_itemForNode: P0): R;
    numberOfLayersRequiringPreviewRefresh<R = number>(): R;
    setNumberOfLayersRequiringPreviewRefresh<R = void, P0 = number>(_v: P0): R;
    layersRequiringPreviewRefresh<R = NSMutableSet>(): R;
    setLayersRequiringPreviewRefresh<R = void, P0 = NSMutableSet>(_v: P0): R;
    defaultFirstResponder<R = NSView>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSLayerListController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSidebarListController, BCOutlineViewDataControllerDataSourceProtocol, BCOutlineViewDataControllerDelegateProtocol {
      alloc<R = MSLayerListController>(): R;
      new: <R = MSLayerListController>() => R;
    }
  }
}

declare const MSLayerListController: cocoa.MSLayerListController.CLASS;
