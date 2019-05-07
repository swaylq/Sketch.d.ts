/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLineEndpointInspectorItem2<T0 = void, T1 = void, T2 = void> extends MSLineEndpointInspectorItem {}
  namespace MSLineEndpointInspectorItem2 {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLineEndpointInspectorItem {
      alloc<R = MSLineEndpointInspectorItem2>(): R;
      new: <R = MSLineEndpointInspectorItem2>() => R;
    }
  }
}

declare const MSLineEndpointInspectorItem2: cocoa.MSLineEndpointInspectorItem2.CLASS;
