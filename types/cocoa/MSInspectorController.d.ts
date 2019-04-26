/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTouchBarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    reloadTouchBars<R = void>(): R;
    closeAnyColorPopover<R = void>(): R;
    adjustInspectorToColorPopover_sender<R = void, P0 = unknown, P1 = unknown>(_adjustInspectorToColorPopover: P0, _sender: P1): R;
    openPopoverForStylePart_atIndex<R = void, P0 = number, P1 = number>(_openPopoverForStylePart: P0, _atIndex: P1): R;
    inspectorController<R = unknown>(): R;
    recursivelyDismissAllPresentedViewControllersOfViewController<R = void, P0 = unknown>(_recursivelyDismissAllPresentedViewControllersOfViewController: P0): R;
    showBorderOptionsAction<R = void, P0 = unknown>(_showBorderOptionsAction: P0): R;
    showFillOptionsAction<R = void, P0 = unknown>(_showFillOptionsAction: P0): R;
    handlerManager<R = unknown>(): R;
    focusOnTextFieldWithIdentifier<R = void, P0 = unknown>(_focusOnTextFieldWithIdentifier: P0): R;
    findFirstTextFieldInView<R = unknown, P0 = unknown>(_findFirstTextFieldInView: P0): R;
    focusOnFirstTextField<R = void>(): R;
    refreshIfNecessary<R = void, P0 = unknown>(_refreshIfNecessary: P0): R;
    reload<R = void>(): R;
    inspectorForLayers_eventHandler<R = unknown, P0 = unknown, P1 = unknown>(_inspectorForLayers: P0, _eventHandler: P1): R;
    refreshCurrentController<R = void>(): R;
    layoutContentView<R = void>(): R;
    reloadSharedObjectsSection<R = void>(): R;
    beginRenameSharedObject_completionBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_beginRenameSharedObject: P0, _completionBlock: P1): R;
    changeTextLayerFont<R = void, P0 = unknown>(_changeTextLayerFont: P0): R;
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
    currentHandlerChanged<R = void>(): R;
    layerPositionPossiblyChanged<R = void>(): R;
    selectionDidChangeTo<R = void, P0 = unknown>(_selectionDidChangeTo: P0): R;
    viewDidResize<R = void>(): R;
    validateAlignmentButtons<R = void>(): R;
    connectAlignmentButtons<R = void>(): R;
    awakeFromNib<R = void>(): R;
    normalInspector<R = MSNormalInspector>(): R;
    setNormalInspector<R = void, P0 = MSNormalInspector>(_v: P0): R;
    contentContainerView<R = NSView>(): R;
    setContentContainerView<R = void, P0 = NSView>(_v: P0): R;
    alignmentContainerView<R = NSView>(): R;
    setAlignmentContainerView<R = void, P0 = NSView>(_v: P0): R;
    alignmentView<R = NSView>(): R;
    setAlignmentView<R = void, P0 = NSView>(_v: P0): R;
    selectedLayers<R = MSLayerArray>(): R;
    setSelectedLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
    alignmentBarHidden<R = boolean>(): R;
    setAlignmentBarHidden<R = void, P0 = boolean>(_v: P0): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
    currentController<R = MSInspectorChildController>(): R;
    setCurrentController<R = void, P0 = MSInspectorChildController>(_v: P0): R;
    sharedStyleInspectorVisible<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSInspectorController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTouchBarDelegateProtocol {
      alloc<R = MSInspectorController>(): R;
      new: <R = MSInspectorController>() => R;
    }
  }
}

declare const MSInspectorController: cocoa.MSInspectorController.CLASS;
