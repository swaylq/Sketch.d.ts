/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    colorInspector_didChangeToColor<R = void, P0 = MSColorInspector, P1 = MSColor>(_colorInspector: P0, _didChangeToColor: P1): R;
    colorInspectorUndoManager<R = NSUndoManager, P0 = MSColorInspector>(_colorInspectorUndoManager: P0): R;
    colorInspectorShouldAdjustInspectorToPopover<R = boolean, P0 = MSColorInspector>(_colorInspectorShouldAdjustInspectorToPopover: P0): R;
    colorInspectorWillClose<R = void, P0 = MSColorInspector>(_colorInspectorWillClose: P0): R;
    colorInspectorDidChange<R = void, P0 = MSColorInspector>(_colorInspectorDidChange: P0): R;
    inspectorDidChangeType<R = void, P0 = MSColorInspector>(_inspectorDidChangeType: P0): R;
  }
  namespace MSColorInspectorDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
