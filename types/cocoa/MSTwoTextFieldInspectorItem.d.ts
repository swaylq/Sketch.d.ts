/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTwoTextFieldInspectorItem<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
    interTextFieldButtonAction<R = void, P0 = unknown>(_interTextFieldButtonAction: P0): R;
    textField2Action<R = void, P0 = unknown>(_textField2Action: P0): R;
    textField1Action<R = void, P0 = unknown>(_textField1Action: P0): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    setupLabels<R = void>(): R;
    initWithTitle_field1Label_field2Label_nibName<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithTitle: P0, _field1Label: P1, _field2Label: P2, _nibName: P3): R;
    initWithTitle_field1Label_field2Label<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithTitle: P0, _field1Label: P1, _field2Label: P2): R;
    field2<R = NSString>(): R;
    setField2<R = void, P0 = NSString>(_v: P0): R;
    field1<R = NSString>(): R;
    setField1<R = void, P0 = NSString>(_v: P0): R;
    itemTitle<R = NSString>(): R;
    setItemTitle<R = void, P0 = NSString>(_v: P0): R;
    interTextFieldButton<R = NSButton>(): R;
    setInterTextFieldButton<R = void, P0 = NSButton>(_v: P0): R;
    textField2<R = MSInlineUpDownTextField>(): R;
    setTextField2<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    textField1<R = MSInlineUpDownTextField>(): R;
    setTextField1<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    itemLabel<R = NSTextField>(): R;
    setItemLabel<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace MSTwoTextFieldInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItem {
      alloc<R = MSTwoTextFieldInspectorItem>(): R;
      new: <R = MSTwoTextFieldInspectorItem>() => R;
    }
  }
}

declare const MSTwoTextFieldInspectorItem: cocoa.MSTwoTextFieldInspectorItem.CLASS;
