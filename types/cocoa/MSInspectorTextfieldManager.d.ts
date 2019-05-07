/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTextfieldManager<T0 = void, T1 = void, T2 = void> extends NSObject, MSInspectorValueAdaptorChangeObserverProtocol {
    cxx_destruct<R = void>(): R;
    handleValueDidChange<R = void>(): R;
    initWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(_initWithItem: P0, _textField: P1, _adaptor: P2, _identifier: P3, _inlineToolTip: P4, _touchBarItems: P5): R;
    initWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems_hideSelectionOnEdit_resetPointsOnEdit<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown, P6 = boolean, P7 = boolean>(_initWithItem: P0, _textField: P1, _adaptor: P2, _identifier: P3, _inlineToolTip: P4, _touchBarItems: P5, _hideSelectionOnEdit: P6, _resetPointsOnEdit: P7): R;
    resetPointsOnEdit<R = boolean>(): R;
    setResetPointsOnEdit<R = void, P0 = boolean>(_v: P0): R;
    hideSelectionOnEdit<R = boolean>(): R;
    setHideSelectionOnEdit<R = void, P0 = boolean>(_v: P0): R;
    touchBarItems<R = NSArray>(): R;
    setTouchBarItems<R = void, P0 = NSArray>(_v: P0): R;
    textField<R = MSUpDownTextField>(): R;
    setTextField<R = void, P0 = MSUpDownTextField>(_v: P0): R;
    adaptor<R = MSMathInspectorValueAdaptor>(): R;
    setAdaptor<R = void, P0 = MSMathInspectorValueAdaptor>(_v: P0): R;
    item<R = MSInspectorItem>(): R;
    setItem<R = void, P0 = MSInspectorItem>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSInspectorTextfieldManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSInspectorValueAdaptorChangeObserverProtocol {
      alloc<R = MSInspectorTextfieldManager>(): R;
      new: <R = MSInspectorTextfieldManager>() => R;
      managerWithItem_textField_adaptor_identifier_inlineToolTip_touchBarItems<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(_managerWithItem: P0, _textField: P1, _adaptor: P2, _identifier: P3, _inlineToolTip: P4, _touchBarItems: P5): R;
    }
  }
}

declare const MSInspectorTextfieldManager: cocoa.MSInspectorTextfieldManager.CLASS;
