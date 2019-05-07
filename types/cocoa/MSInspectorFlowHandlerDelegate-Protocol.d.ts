/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorFlowHandlerDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    layersForFlowHandler<R = MSLayerArray, P0 = MSInspectorFlowHandler>(_layersForFlowHandler: P0): R;
    documentForFlowHandler<R = MSDocument, P0 = MSInspectorFlowHandler>(_documentForFlowHandler: P0): R;
  }
  namespace MSInspectorFlowHandlerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
