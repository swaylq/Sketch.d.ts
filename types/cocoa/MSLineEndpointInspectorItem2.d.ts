/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLineEndpointInspectorItem2<T = any> extends MSLineEndpointInspectorItem {}
  namespace classes {
    export interface MSLineEndpointInspectorItem2<T = any> extends MSLineEndpointInspectorItem {
      alloc<R = MSLineEndpointInspectorItem2>(): R;
      new: <R = MSLineEndpointInspectorItem2>() => R;
    }
  }
}

declare const MSLineEndpointInspectorItem2: cocoa.classes.MSLineEndpointInspectorItem2;