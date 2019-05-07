/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolInstanceSectionDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSInspectorSectionDelegateProtocol {
    userInterfaceCacheForSection<R = NSCache, P0 = MSBaseInspectorSection>(_userInterfaceCacheForSection: P0): R;
  }
  namespace MSSymbolInstanceSectionDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorSectionDelegateProtocol {}
  }
}
