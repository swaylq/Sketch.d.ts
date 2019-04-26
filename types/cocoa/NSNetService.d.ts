/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNetService<T0 = void, T1 = void, T2 = void> {
    // + NSNetService(SMKWebConnection):
    addressStrings<R = NSArray>(): R;
  }
  namespace NSNetService {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSNetService(SMKWebConnection): 
      addressStringWithData<R = unknown, P0 = unknown>(_addressStringWithData: P0): R;
    }
  }
}

declare const NSNetService: cocoa.NSNetService.CLASS;
