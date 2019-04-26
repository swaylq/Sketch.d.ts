/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextHeaderInspectorItemDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSInspectorItemDelegateProtocol {
    itemWantsToggleDetailSettings<R = void, P0 = MSTextHeaderInspectorItem>(_itemWantsToggleDetailSettings: P0): R;
  }
  namespace MSTextHeaderInspectorItemDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorItemDelegateProtocol {}
  }
}
