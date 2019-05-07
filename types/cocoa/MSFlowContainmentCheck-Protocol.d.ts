/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowContainmentCheckProtocol<T0 = void, T1 = void, T2 = void> {
    containsFlowWithSymbolsFromDocument<R = boolean, P0 = MSImmutableDocumentData>(_containsFlowWithSymbolsFromDocument: P0): R;
    firstFlowWithSymbolsFromDocument<R = MSImmutableFlowConnection, P0 = MSImmutableDocumentData>(_firstFlowWithSymbolsFromDocument: P0): R;
  }
  namespace MSFlowContainmentCheckProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
