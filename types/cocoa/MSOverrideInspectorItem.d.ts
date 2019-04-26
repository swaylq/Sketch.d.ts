/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSDataMenuProviderDelegateProtocol {
    updateCanvasHighlight<R = void>(): R;
    highlightItemInCanvas<R = void, P0 = unknown>(_highlightItemInCanvas: P0): R;
    applyOverrideToSelectedLayers<R = void, P0 = unknown>(_applyOverrideToSelectedLayers: P0): R;
    overrideValueAction<R = void, P0 = unknown>(_overrideValueAction: P0): R;
    labelView<R = unknown>(): R;
    valueFromControlView<R = unknown, P0 = unknown>(_valueFromControlView: P0): R;
    controlViewForEditingOverride<R = unknown>(): R;
    build<R = void>(): R;
    setIndentationLevel<R = void, P0 = number>(_setIndentationLevel: P0): R;
    views<R = unknown>(): R;
    initWithPrimaryOverrideRepresentation<R = unknown, P0 = unknown>(_initWithPrimaryOverrideRepresentation: P0): R;
    trackingArea<R = NSTrackingArea>(): R;
    setTrackingArea<R = void, P0 = NSTrackingArea>(_v: P0): R;
    indentationConstraint<R = NSLayoutConstraint>(): R;
    setIndentationConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
    dataController<R = MSDataMenuProvider>(): R;
    setDataController<R = void, P0 = MSDataMenuProvider>(_v: P0): R;
    displaysLabel<R = boolean>(): R;
    setDisplaysLabel<R = void, P0 = boolean>(_v: P0): R;
    overrideRepresentation<R = MSOverrideRepresentation>(): R;
    hasSingleOverride<R = boolean>(): R;
    document<R = MSDocument>(): R;
    documentData<R = MSDocumentData>(): R;
    primaryOverride<R = MSAvailableOverride>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSOverrideInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem, MSDataMenuProviderDelegateProtocol {
      alloc<R = MSOverrideInspectorItem>(): R;
      new: <R = MSOverrideInspectorItem>() => R;
      allOverridesInLayers_match<R = boolean, P0 = unknown, P1 = unknown>(_allOverridesInLayers: P0, _match: P1): R;
      heightForOverride_layers_shouldShowLabel_indentationLevel<R = number, P0 = unknown, P1 = unknown, P2 = boolean, P3 = number>(_heightForOverride: P0, _layers: P1, _shouldShowLabel: P2, _indentationLevel: P3): R;
    }
  }
}

declare const MSOverrideInspectorItem: cocoa.MSOverrideInspectorItem.CLASS;
