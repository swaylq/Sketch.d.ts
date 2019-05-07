/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface doRequest<T0 = void, T1 = void, T2 = void> {}
  namespace doRequest {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const doRequest: cocoa.doRequest.CLASS;
