/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorItemProviderProtocol<T0 = void, T1 = void, T2 = void> {
    wantSeparatorAtIndex<R = boolean, P0 = number>(_wantSeparatorAtIndex: P0): R;
    heightOfItemViewAtIndex<R = number, P0 = number>(_heightOfItemViewAtIndex: P0): R;
    recycleItem<R = void, P0 = NSViewController>(_recycleItem: P0): R;
    vendItemAtIndex<R = NSViewController, P0 = number>(_vendItemAtIndex: P0): R;
    numberOfItems<R = number>(): R;
  }
  namespace MSInspectorItemProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
