/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKUSBHTTPResponse<T0 = void, T1 = void, T2 = void> extends SMKURLResponse {}
  namespace SMKUSBHTTPResponse {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SMKURLResponse {
      alloc<R = SMKUSBHTTPResponse>(): R;
      new: <R = SMKUSBHTTPResponse>() => R;
    }
  }
}

declare const SMKUSBHTTPResponse: cocoa.SMKUSBHTTPResponse.CLASS;
