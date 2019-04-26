/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorItemDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    documentForInspectorItem<R = MSDocument, P0 = NSViewController>(_documentForInspectorItem: P0): R;
    itemDidResize<R = void, P0 = NSViewController>(_itemDidResize: P0): R;
    valuesPossiblyChanged<R = void, P0 = NSViewController>(_valuesPossiblyChanged: P0): R;
    userInterfaceCacheForItem<R = NSCache, P0 = NSViewController>(_userInterfaceCacheForItem: P0): R;
    item_wantsSectionToCollapse<R = void, P0 = NSViewController, P1 = boolean>(_item: P0, _wantsSectionToCollapse: P1): R;
  }
  namespace MSInspectorItemDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
