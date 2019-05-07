/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLineEndpointInspectorItem1<T0 = void, T1 = void, T2 = void> extends MSLineEndpointInspectorItem {}
  namespace MSLineEndpointInspectorItem1 {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLineEndpointInspectorItem {
      alloc<R = MSLineEndpointInspectorItem1>(): R;
      new: <R = MSLineEndpointInspectorItem1>() => R;
    }
  }
}

declare const MSLineEndpointInspectorItem1: cocoa.MSLineEndpointInspectorItem1.CLASS;
