/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLFileTypeMappings<T0 = void, T1 = void, T2 = void> extends NSObject {
    extensionsForMIMEType<R = unknown, P0 = unknown>(_extensionsForMIMEType: P0): R;
    preferredExtensionForMIMEType<R = unknown, P0 = unknown>(_preferredExtensionForMIMEType: P0): R;
    MIMETypeForExtension<R = unknown, P0 = unknown>(_MIMETypeForExtension: P0): R;
    _UTIMIMETypeForExtension<R = unknown, P0 = unknown>(__UTIMIMETypeForExtension: P0): R;
    _UTIextensionForMIMEType<R = unknown, P0 = unknown>(__UTIextensionForMIMEType: P0): R;
    _init<R = unknown>(): R;
  }
  namespace NSURLFileTypeMappings {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSURLFileTypeMappings>(): R;
      new: <R = NSURLFileTypeMappings>() => R;
      sharedMappings<R = unknown>(): R;
    }
  }
}

declare const NSURLFileTypeMappings: cocoa.NSURLFileTypeMappings.CLASS;
