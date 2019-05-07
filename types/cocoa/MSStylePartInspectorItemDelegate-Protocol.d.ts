/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartInspectorItemDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    valuesPossiblyChanged<R = void, P0 = NSViewController>(_valuesPossiblyChanged: P0): R;
    stylePartInspectorItemDocument<R = MSDocument, P0 = NSViewController>(_stylePartInspectorItemDocument: P0): R;
  }
  namespace MSStylePartInspectorItemDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
