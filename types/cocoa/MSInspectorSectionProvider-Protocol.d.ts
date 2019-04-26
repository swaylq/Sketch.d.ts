/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSectionProviderProtocol<T0 = void, T1 = void, T2 = void> {
    sections<R = NSArray>(): R;
  }
  namespace MSInspectorSectionProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
