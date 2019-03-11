/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserInterfaceCompressionOptions<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol, cocoa.NSCodingProtocol {
    description<R = unknown>(): R;
    optionsByAddingOptions<R = unknown, P0 = unknown>(_optionsByAddingOptions: P0): R;
    optionsByRemovingOptions<R = unknown, P0 = unknown>(_optionsByRemovingOptions: P0): R;
    intersectsOptions<R = boolean, P0 = unknown>(_intersectsOptions: P0): R;
    containsOptions<R = boolean, P0 = unknown>(_containsOptions: P0): R;
    identifiers<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithCompressionOptions<R = unknown, P0 = unknown>(_initWithCompressionOptions: P0): R;
    initWithIdentifier<R = unknown, P0 = unknown>(_initWithIdentifier: P0): R;
    empty<R = boolean>(): R;
  }
  namespace classes {
    export interface NSUserInterfaceCompressionOptions<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSCodingProtocol {
      alloc<R = NSUserInterfaceCompressionOptions>(): R;
      new: <R = NSUserInterfaceCompressionOptions>() => R;
      standardOptions<R = unknown>(): R;
      breakEqualWidthsOption<R = unknown>(): R;
      reduceMetricsOption<R = unknown>(): R;
      hideTextOption<R = unknown>(): R;
      hideImagesOption<R = unknown>(): R;
    }
  }
}

declare const NSUserInterfaceCompressionOptions: cocoa.classes.NSUserInterfaceCompressionOptions;
