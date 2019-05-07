/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorItem<T0 = void, T1 = void, T2 = void> extends NSViewController, MSInspectorValueAdaptorDelegateProtocol, MSUpDownTextFieldDelegateProtocol {
    cxx_destruct<R = void>(): R;
    cachedUserInterfaceElementForKey<R = unknown, P0 = unknown>(_cachedUserInterfaceElementForKey: P0): R;
    cacheUserInterfaceElement_withKey<R = void, P0 = unknown, P1 = unknown>(_cacheUserInterfaceElement: P0, _withKey: P1): R;
    manageTextField_adaptor_identifier_inlineToolTip_touchBarItems<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_manageTextField: P0, _adaptor: P1, _identifier: P2, _inlineToolTip: P3, _touchBarItems: P4): R;
    sectionWithIdentifierWillCollapse<R = void, P0 = unknown>(_sectionWithIdentifierWillCollapse: P0): R;
    updateDisplayedValues<R = void>(): R;
    selectionDidChangeTo<R = void, P0 = unknown>(_selectionDidChangeTo: P0): R;
    managedControls<R = NSMapTable>(): R;
    setManagedControls<R = void, P0 = NSMapTable>(_v: P0): R;
    layersController<R = NSArrayController>(): R;
    setLayersController<R = void, P0 = NSArrayController>(_v: P0): R;
    layers<R = MSLayerArray>(): R;
    setLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
    delegate<R = MSInspectorItemDelegate>(): R;
    setDelegate<R = void, P0 = MSInspectorItemDelegate>(_v: P0): R;
    document<R = MSDocument>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSInspectorValueAdaptorDelegateProtocol, MSUpDownTextFieldDelegateProtocol {
      alloc<R = MSInspectorItem>(): R;
      new: <R = MSInspectorItem>() => R;
      canHandleLayer<R = boolean, P0 = unknown>(_canHandleLayer: P0): R;
      canHandleSomeLayersOfSelection<R = boolean, P0 = unknown>(_canHandleSomeLayersOfSelection: P0): R;
      filterSelection<R = unknown, P0 = unknown>(_filterSelection: P0): R;
      itemForSection<R = unknown, P0 = unknown>(_itemForSection: P0): R;
    }
  }
}

declare const MSInspectorItem: cocoa.MSInspectorItem.CLASS;
